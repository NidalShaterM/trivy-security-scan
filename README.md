# trivy-security-scan

Examples: 
- vulnerabilities in Node.js dependencies, "lodash": "4.17.20" # 🚨 Vulnerable Version (CVE-2021-23337)
- HARD CODED SECRETS   // const API_KEY = ""; // 🚨 Hardcoded secret
- Node.js 14 is deprecated & insecure
- K8s misconfig like 
```
apiVersion: v1
kind: Pod
metadata:
  name: insecure-pod
spec:
  containers:
    - name: app
      image: node:14
      securityContext:
        privileged: true  # 🚨 Allows full root access!
```