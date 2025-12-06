---
title: Shipping & Observability
sidebar_label: Shipping & Observability
---

# Shipping & Observability (Module 5)

## Learning objectives
- Plan edge deployments for humanoid stacks with rollback and safety envelopes.
- Instrument robotics services for logs, metrics, traces, and live health.
- Design runbooks for incident response, recovery, and remote debugging.

## Prerequisites
- Modules 1-4 completed (ROS 2, Simulation, NVIDIA Isaac, VLA).
- Access to target hardware (GPU edge box or PC + robot controller).
- Basic familiarity with Docker and systemd services.

## Core topics
- **Packaging & rollout:** Docker images, OCI registries, air-gap export, signed artifacts.
- **Runtime orchestration:** systemd services, watchdogs, health probes, and rate limits for agent loops.
- **Observability:** metrics (Prometheus), logs (structured), traces (OpenTelemetry), and event logging for RAG.
- **Safety & rollback:** kill switches, command gating, staged rollouts, blue/green or canary with rapid revert.
- **Remote ops:** SSH jump boxes, tmux/screen sessions, secure file sync, and minimal bandwidth dashboards.

## Example snippets
```bash title="systemd unit for a ROS 2 service"
sudo tee /etc/systemd/system/humanoid-perception.service <<'EOF'
[Unit]
Description=Humanoid perception stack
After=network.target docker.service
StartLimitIntervalSec=0

[Service]
Restart=always
RestartSec=3
ExecStart=/usr/bin/docker run --rm --gpus all ghcr.io/maheen/humanoid-perception:latest
ExecStop=/usr/bin/docker stop humanoid-perception

[Install]
WantedBy=multi-user.target
EOF
sudo systemctl enable --now humanoid-perception
```

```yaml title="Prometheus scrape (edge node)"
scrape_configs:
  - job_name: humanoid_ros2
    metrics_path: /metrics
    static_configs:
      - targets: ['127.0.0.1:9100', '127.0.0.1:9615']
```

```bash title="Quick rollback (tag swap)"
docker pull ghcr.io/maheen/humanoid-perception:prev
docker tag ghcr.io/maheen/humanoid-perception:prev ghcr.io/maheen/humanoid-perception:latest
systemctl restart humanoid-perception
```

## Checklist
- [ ] Images are signed, versioned, and reproducible; hashes recorded in release notes.
- [ ] Health probes + watchdogs restart unhealthy services; kill switch documented.
- [ ] Metrics/logs/traces flow to a dashboard; alerts fire on latency, errors, temperature, and battery.
- [ ] Rollback tested (tag swap or blue/green) with a &lt;2 minute path to safe state.
- [ ] Runbooks cover remote debugging, log capture, and RAG source export.

## References
- OpenTelemetry: https://opentelemetry.io/
- Prometheus: https://prometheus.io/docs/introduction/overview/
- Systemd: https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html

