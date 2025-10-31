/* ========================================
   VALIDAÇÃO DE FORMULÁRIOS
   Sistema de verificação de consistência
   ======================================== */

// ========================================
// MÁSCARAS DE INPUT
// ========================================

function maskCPF(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}

function maskPhone(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
}

function maskCEP(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
}

function applyMask(input, maskFunction) {
    input.addEventListener('input', function(e) {
        const value = e.target.value;
        e.target.value = maskFunction(value);
    });
}

// ========================================
// VALIDAÇÕES CUSTOMIZADAS
// ========================================

function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11) return false;
    
    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) return false;
    
    // Validar primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;
    
    // Validar segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10 || cleaned.length === 11;
}

function validateCEP(cep) {
    const cleaned = cep.replace(/\D/g, '');
    return cleaned.length === 8;
}

function validateDate(date) {
    const dateObj = new Date(date);
    const today = new Date();
    const minAge = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    
    return dateObj <= minAge;
}

// ========================================
// FEEDBACK VISUAL
// ========================================

function showError(input, message) {
    const parent = input.parentElement;
    
    // Remover erro anterior
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Adicionar classe de erro
    input.classList.add('error');
    input.classList.remove('success');
    
    // Criar mensagem de erro
    const errorDiv = document.createElement('small');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'var(--color-error)';
    errorDiv.style.display = 'block';
    errorDiv.style.marginTop = '4px';
    errorDiv.textContent = message;
    
    parent.appendChild(errorDiv);
}

function showSuccess(input) {
    const parent = input.parentElement;
    
    // Remover erro
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Adicionar classe de sucesso
    input.classList.remove('error');
    input.classList.add('success');
}

function clearValidation(input) {
    const parent = input.parentElement;
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    input.classList.remove('error', 'success');
}

// ========================================
// VALIDAÇÃO EM TEMPO REAL
// ========================================

function setupRealtimeValidation(form) {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Validar ao sair do campo
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Limpar validação ao focar
        input.addEventListener('focus', function() {
            if (this.value === '') {
                clearValidation(this);
            }
        });
    });
}

function validateField(input) {
    const value = input.value.trim();
    const type = input.type;
    const id = input.id;
    
    // Campos obrigatórios
    if (input.hasAttribute('required') && value === '') {
        showError(input, 'Este campo é obrigatório');
        return false;
    }
    
    // Se campo vazio e não obrigatório, limpar
    if (value === '') {
        clearValidation(input);
        return true;
    }
    
    // Validações específicas
    switch(id) {
        case 'cpf':
            if (!validateCPF(value)) {
                showError(input, 'CPF inválido');
                return false;
            }
            break;
            
        case 'email':
            if (!validateEmail(value)) {
                showError(input, 'E-mail inválido');
                return false;
            }
            break;
            
        case 'telefone':
            if (!validatePhone(value)) {
                showError(input, 'Telefone inválido');
                return false;
            }
            break;
            
        case 'cep':
            if (!validateCEP(value)) {
                showError(input, 'CEP inválido');
                return false;
            }
            break;
            
        case 'data-nascimento':
            if (!validateDate(value)) {
                showError(input, 'Idade mínima: 18 anos');
                return false;
            }
            break;
            
        case 'nome-completo':
            if (value.length < 3) {
                showError(input, 'Nome deve ter no mínimo 3 caracteres');
                return false;
            }
            if (!/^[A-Za-zÀ-ÿ\s]+$/.test(value)) {
                showError(input, 'Nome deve conter apenas letras');
                return false;
            }
            break;
    }
    
    // Validações nativas HTML5
    if (input.validity.valid) {
        showSuccess(input);
        return true;
    } else {
        if (input.validity.typeMismatch) {
            showError(input, 'Formato inválido');
        } else if (input.validity.tooShort) {
            showError(input, `Mínimo ${input.minLength} caracteres`);
        } else if (input.validity.tooLong) {
            showError(input, `Máximo ${input.maxLength} caracteres`);
        } else if (input.validity.patternMismatch) {
            showError(input, input.title || 'Formato inválido');
        }
        return false;
    }
}

// ========================================
// VALIDAÇÃO AO ENVIAR FORMULÁRIO
// ========================================

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function showFormAlert(message, type = 'error') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `<p>${message}</p>`;
    
    const form = document.querySelector('form');
    form.insertBefore(alert, form.firstChild);
    
    // Scroll para o alerta
    alert.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Remover após 5 segundos
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// ========================================
// INICIALIZAÇÃO DO FORMULÁRIO
// ========================================

function initFormValidation() {
    const form = document.getElementById('form-voluntario');
    
    if (!form) return;
    
    console.log('📝 Sistema de validação iniciado');\n    
    // Aplicar máscaras
    const cpfInput = document.getElementById('cpf');
    const phoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');
    
    if (cpfInput) applyMask(cpfInput, maskCPF);
    if (phoneInput) applyMask(phoneInput, maskPhone);
    if (cepInput) applyMask(cepInput, maskCEP);
    
    // Setup validação em tempo real
    setupRealtimeValidation(form);
    
    // Validar ao enviar
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Remover alertas anteriores
        const oldAlerts = form.querySelectorAll('.alert');
        oldAlerts.forEach(alert => alert.remove());
        
        if (validateForm(form)) {
            showFormAlert('✅ Cadastro realizado com sucesso! Entraremos em contato em breve.', 'success');
            
            // Simular envio
            setTimeout(() => {
                form.reset();
                const inputs = form.querySelectorAll('input, select, textarea');
                inputs.forEach(input => clearValidation(input));
            }, 2000);
        } else {
            showFormAlert('❌ Por favor, corrija os erros no formulário antes de enviar.', 'error');
        }
    });
    
    // Limpar formulário
    form.addEventListener('reset', function() {
        setTimeout(() => {
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach(input => clearValidation(input));
            
            const alerts = form.querySelectorAll('.alert');
            alerts.forEach(alert => alert.remove());
        }, 10);
    });
}

// Inicializar quando DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    initFormValidation();
});

// Exportar funções
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateCPF,
        validateEmail,
        validatePhone,
        validateCEP,
        validateDate,
        maskCPF,
        maskPhone,
        maskCEP
    };
}
