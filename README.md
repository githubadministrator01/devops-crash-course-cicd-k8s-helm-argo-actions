# DevOps Crash Course: CI/CD + K8s + Helm + Argo CD + GitHub Actions

This repository demonstrates an end-to-end DevOps workflow for a sample Node.js application:
- Build, test, and scan with **GitHub Actions**
- Package with **Docker**
- Deploy to **Kubernetes** using **Helm**
- Manage delivery with **Argo CD**
- Observe with **Prometheus / Grafana / Loki**

It is designed as a **learning project** for DevOps engineers and developers who want to see how these tools integrate.

---

## 📂 Repository Structure

```
.
├── actions-runner/                # Self-hosted GitHub Actions runner setup
│   └── work/                      # Working directory for runner jobs
├── app/                           # Sample Node.js application
│   └── public/                    # Static assets (HTML, CSS, JS, images)
├── helm/                          # Helm charts for application & infra
│   ├── argocd/                    # Helm chart for Argo CD
│   ├── ingress-nginx/             # Helm chart for NGINX ingress controller
│   ├── loki/                      # Helm chart for Loki (logging)
│   ├── my-node-app-chart/         # Custom Helm chart for Node.js app
│   │   └── templates/             # Kubernetes templates for app deployment
│   └── prom-kube-stack/           # Helm chart for Prometheus + Grafana stack
├── k8s/                           # Kubernetes manifests (non-Helm)
│   ├── argocd/                    # Raw manifests for Argo CD
│   ├── manifests/                 # App & infra manifests
│   │   ├── monitoring/            # Monitoring manifests (Prometheus, Grafana, Loki CRDs)
│   │   ├── my-node-app/           # Node.js application manifests
│   │   └── smtp/                  # SMTP/Email service manifests
│   └── tls/                       # TLS/Ingress certificates & secrets
└── monitoring/                    # Monitoring configuration
    ├── alerts/                    # Grafana alert rules
    ├── dashboards/                # Grafana dashboards
    ├── notifications/             # Grafana contact points & notification policies
    ├── podlogs/                   # Loki PodLogs configurations
    └── service-monitors/          # Prometheus ServiceMonitor configs
```

---

## 🚀 Features

- **CI/CD with GitHub Actions**  
  - Linting, unit tests, Docker image build  
  - Security scan (e.g., Trivy)  
  - Push to container registry (GitHub / DockerHub)  
  - Deploy via Helm and Argo CD

- **Kubernetes Deployments**  
  - App deployed via Helm chart  
  - Ingress and TLS support  
  - Monitoring sidecars

- **Observability**  
  - Prometheus metrics scraping  
  - Grafana dashboards & alerts (sidecar managed)  
  - Loki centralized logging

---

## 🧩 Prerequisites

- Kubernetes cluster (Docker Desktop, minikube, kind, or cloud-managed)  
- [Helm v3](https://helm.sh/docs/intro/install/)  
- [kubectl](https://kubernetes.io/docs/tasks/tools/) configured  
- [Argo CD](https://argo-cd.readthedocs.io/en/stable/getting_started/) installed in cluster  
- GitHub repo with **Actions** enabled  

---

## 📜 License

MIT — for demo/educational purposes.
