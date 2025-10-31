#!/usr/bin/env python3
"""
Backend API Testing for ONG Vida em Movimento
Tests all backend endpoints with comprehensive validation
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, Any

# Backend URL from frontend/.env
BACKEND_URL = "https://ong-inclusao-social.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.session = requests.Session()
        self.test_results = []
        self.volunteer_id = None
        self.contact_id = None
        
    def log_test(self, test_name: str, success: bool, details: str = "", response_data: Any = None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat(),
            "response_data": response_data
        }
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if details:
            print(f"   Details: {details}")
        if not success and response_data:
            print(f"   Response: {response_data}")
        print()

    def test_stats_endpoint(self):
        """Test GET /api/stats endpoint"""
        try:
            response = self.session.get(f"{BACKEND_URL}/stats", timeout=10)
            
            if response.status_code != 200:
                self.log_test("GET /api/stats", False, 
                            f"HTTP {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            # Validate response structure
            required_fields = ["volunteers", "beneficiaries", "projects", "years"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                self.log_test("GET /api/stats", False, 
                            f"Missing fields: {missing_fields}", data)
                return False
                
            # Validate data types and values
            if not isinstance(data["volunteers"], int) or data["volunteers"] < 0:
                self.log_test("GET /api/stats", False, 
                            f"Invalid volunteers count: {data['volunteers']}", data)
                return False
                
            if not isinstance(data["beneficiaries"], int) or data["beneficiaries"] < 0:
                self.log_test("GET /api/stats", False, 
                            f"Invalid beneficiaries count: {data['beneficiaries']}", data)
                return False
                
            if not isinstance(data["projects"], int) or data["projects"] < 0:
                self.log_test("GET /api/stats", False, 
                            f"Invalid projects count: {data['projects']}", data)
                return False
                
            if not isinstance(data["years"], int) or data["years"] < 0:
                self.log_test("GET /api/stats", False, 
                            f"Invalid years count: {data['years']}", data)
                return False
            
            self.log_test("GET /api/stats", True, 
                        f"Stats: {data['volunteers']} volunteers, {data['beneficiaries']} beneficiaries, {data['projects']} projects, {data['years']} years", 
                        data)
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_test("GET /api/stats", False, f"Request error: {str(e)}")
            return False
        except json.JSONDecodeError as e:
            self.log_test("GET /api/stats", False, f"JSON decode error: {str(e)}", response.text)
            return False
        except Exception as e:
            self.log_test("GET /api/stats", False, f"Unexpected error: {str(e)}")
            return False

    def test_projects_endpoint(self):
        """Test GET /api/projects endpoint"""
        try:
            response = self.session.get(f"{BACKEND_URL}/projects", timeout=10)
            
            if response.status_code != 200:
                self.log_test("GET /api/projects", False, 
                            f"HTTP {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            if not isinstance(data, list):
                self.log_test("GET /api/projects", False, 
                            "Response is not a list", data)
                return False
                
            if len(data) != 4:
                self.log_test("GET /api/projects", False, 
                            f"Expected 4 projects, got {len(data)}", data)
                return False
            
            # Validate each project structure
            required_fields = ["id", "title", "description", "category", "image", "participants", "status"]
            for i, project in enumerate(data):
                missing_fields = [field for field in required_fields if field not in project]
                if missing_fields:
                    self.log_test("GET /api/projects", False, 
                                f"Project {i+1} missing fields: {missing_fields}", project)
                    return False
                    
                # Validate data types
                if not isinstance(project["participants"], int) or project["participants"] < 0:
                    self.log_test("GET /api/projects", False, 
                                f"Project {i+1} invalid participants: {project['participants']}", project)
                    return False
            
            self.log_test("GET /api/projects", True, 
                        f"Retrieved {len(data)} projects successfully", 
                        [p["title"] for p in data])
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_test("GET /api/projects", False, f"Request error: {str(e)}")
            return False
        except json.JSONDecodeError as e:
            self.log_test("GET /api/projects", False, f"JSON decode error: {str(e)}", response.text)
            return False
        except Exception as e:
            self.log_test("GET /api/projects", False, f"Unexpected error: {str(e)}")
            return False

    def test_volunteer_registration(self):
        """Test POST /api/volunteers endpoint"""
        volunteer_data = {
            "name": "Test Volunteer",
            "email": "test@test.com",
            "phone": "(11) 99999-9999",
            "area": "Esporte",
            "message": "Test message"
        }
        
        try:
            response = self.session.post(
                f"{BACKEND_URL}/volunteers", 
                json=volunteer_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code != 200:
                self.log_test("POST /api/volunteers", False, 
                            f"HTTP {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            # Validate response structure
            required_fields = ["id", "name", "email", "phone", "area", "message", "createdAt"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                self.log_test("POST /api/volunteers", False, 
                            f"Missing fields in response: {missing_fields}", data)
                return False
            
            # Validate data matches input
            for field in ["name", "email", "phone", "area", "message"]:
                if data[field] != volunteer_data[field]:
                    self.log_test("POST /api/volunteers", False, 
                                f"Field {field} mismatch: expected {volunteer_data[field]}, got {data[field]}", data)
                    return False
            
            # Store volunteer ID for later verification
            self.volunteer_id = data["id"]
            
            self.log_test("POST /api/volunteers", True, 
                        f"Volunteer created with ID: {self.volunteer_id}", data)
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_test("POST /api/volunteers", False, f"Request error: {str(e)}")
            return False
        except json.JSONDecodeError as e:
            self.log_test("POST /api/volunteers", False, f"JSON decode error: {str(e)}", response.text)
            return False
        except Exception as e:
            self.log_test("POST /api/volunteers", False, f"Unexpected error: {str(e)}")
            return False

    def test_get_volunteers(self):
        """Test GET /api/volunteers endpoint"""
        try:
            response = self.session.get(f"{BACKEND_URL}/volunteers", timeout=10)
            
            if response.status_code != 200:
                self.log_test("GET /api/volunteers", False, 
                            f"HTTP {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            if not isinstance(data, list):
                self.log_test("GET /api/volunteers", False, 
                            "Response is not a list", data)
                return False
            
            # Check if our test volunteer exists
            if self.volunteer_id:
                volunteer_found = any(v.get("id") == self.volunteer_id for v in data)
                if not volunteer_found:
                    self.log_test("GET /api/volunteers", False, 
                                f"Test volunteer with ID {self.volunteer_id} not found in list", 
                                [v.get("id") for v in data])
                    return False
            
            self.log_test("GET /api/volunteers", True, 
                        f"Retrieved {len(data)} volunteers, test volunteer found", 
                        len(data))
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_test("GET /api/volunteers", False, f"Request error: {str(e)}")
            return False
        except json.JSONDecodeError as e:
            self.log_test("GET /api/volunteers", False, f"JSON decode error: {str(e)}", response.text)
            return False
        except Exception as e:
            self.log_test("GET /api/volunteers", False, f"Unexpected error: {str(e)}")
            return False

    def test_contact_submission(self):
        """Test POST /api/contact endpoint"""
        contact_data = {
            "name": "Test Contact",
            "email": "contact@test.com",
            "subject": "Test Subject",
            "message": "Test message"
        }
        
        try:
            response = self.session.post(
                f"{BACKEND_URL}/contact", 
                json=contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code != 200:
                self.log_test("POST /api/contact", False, 
                            f"HTTP {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            # Validate response structure
            required_fields = ["id", "name", "email", "subject", "message", "createdAt"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                self.log_test("POST /api/contact", False, 
                            f"Missing fields in response: {missing_fields}", data)
                return False
            
            # Validate data matches input
            for field in ["name", "email", "subject", "message"]:
                if data[field] != contact_data[field]:
                    self.log_test("POST /api/contact", False, 
                                f"Field {field} mismatch: expected {contact_data[field]}, got {data[field]}", data)
                    return False
            
            # Store contact ID for later verification
            self.contact_id = data["id"]
            
            self.log_test("POST /api/contact", True, 
                        f"Contact created with ID: {self.contact_id}", data)
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_test("POST /api/contact", False, f"Request error: {str(e)}")
            return False
        except json.JSONDecodeError as e:
            self.log_test("POST /api/contact", False, f"JSON decode error: {str(e)}", response.text)
            return False
        except Exception as e:
            self.log_test("POST /api/contact", False, f"Unexpected error: {str(e)}")
            return False

    def test_get_contacts(self):
        """Test GET /api/contact endpoint"""
        try:
            response = self.session.get(f"{BACKEND_URL}/contact", timeout=10)
            
            if response.status_code != 200:
                self.log_test("GET /api/contact", False, 
                            f"HTTP {response.status_code}", response.text)
                return False
                
            data = response.json()
            
            if not isinstance(data, list):
                self.log_test("GET /api/contact", False, 
                            "Response is not a list", data)
                return False
            
            # Check if our test contact exists
            if self.contact_id:
                contact_found = any(c.get("id") == self.contact_id for c in data)
                if not contact_found:
                    self.log_test("GET /api/contact", False, 
                                f"Test contact with ID {self.contact_id} not found in list", 
                                [c.get("id") for c in data])
                    return False
            
            self.log_test("GET /api/contact", True, 
                        f"Retrieved {len(data)} contacts, test contact found", 
                        len(data))
            return True
            
        except requests.exceptions.RequestException as e:
            self.log_test("GET /api/contact", False, f"Request error: {str(e)}")
            return False
        except json.JSONDecodeError as e:
            self.log_test("GET /api/contact", False, f"JSON decode error: {str(e)}", response.text)
            return False
        except Exception as e:
            self.log_test("GET /api/contact", False, f"Unexpected error: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all backend API tests"""
        print(f"🚀 Starting Backend API Tests for ONG Vida em Movimento")
        print(f"Backend URL: {BACKEND_URL}")
        print("=" * 60)
        
        # Test sequence
        tests = [
            ("Stats API", self.test_stats_endpoint),
            ("Projects API", self.test_projects_endpoint),
            ("Volunteer Registration", self.test_volunteer_registration),
            ("Get Volunteers", self.test_get_volunteers),
            ("Contact Submission", self.test_contact_submission),
            ("Get Contacts", self.test_get_contacts),
        ]
        
        passed = 0
        total = len(tests)
        
        for test_name, test_func in tests:
            print(f"Running: {test_name}")
            if test_func():
                passed += 1
        
        print("=" * 60)
        print(f"📊 Test Results: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All tests passed!")
            return True
        else:
            print("⚠️  Some tests failed. Check details above.")
            return False

    def print_summary(self):
        """Print detailed test summary"""
        print("\n" + "=" * 60)
        print("📋 DETAILED TEST SUMMARY")
        print("=" * 60)
        
        for result in self.test_results:
            status = "✅ PASS" if result["success"] else "❌ FAIL"
            print(f"{status} {result['test']}")
            if result["details"]:
                print(f"   {result['details']}")
        
        passed = sum(1 for r in self.test_results if r["success"])
        total = len(self.test_results)
        print(f"\nFinal Score: {passed}/{total} tests passed")

def main():
    """Main test execution"""
    tester = BackendTester()
    
    try:
        success = tester.run_all_tests()
        tester.print_summary()
        
        # Exit with appropriate code
        sys.exit(0 if success else 1)
        
    except KeyboardInterrupt:
        print("\n⚠️  Tests interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n💥 Unexpected error during testing: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()