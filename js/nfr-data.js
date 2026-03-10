// nfr-data.js — All 90 Non-Functional Requirements from RFP/2026/61570, Annex 2
// Structured by system → individual NFR
// Each NFR has: id, title, desc

const rfpNFRs = {

  // ─────────────────────────────────────────────────────────────────────────
  // NEHR NFRs (16 requirements: NEHR.NFN.0–15)
  // ─────────────────────────────────────────────────────────────────────────
  NEHR: {
    label: 'National Electronic Health Record',
    color: 'blue',
    nfrs: [
      { id: 'NEHR.NFN.0', title: 'Performance – Get', desc: '99.9% of all synchronous search-get transactions SHALL be less than 1s. Uses FHIR Identifiers.' },
      { id: 'NEHR.NFN.1', title: 'Performance – Search', desc: '99.9% of all synchronous search with parameters SHALL be less than 2s.' },
      { id: 'NEHR.NFN.2', title: 'Create Performance', desc: '99.9% of all synchronous create transactions SHALL be less than 2s.' },
      { id: 'NEHR.NFN.3', title: 'Update Performance', desc: '99.9% of all synchronous update transactions SHALL be less than 2s.' },
      { id: 'NEHR.NFN.4', title: 'Availability', desc: 'The NEHR SHALL be available 99.999% of the time, excluding planned outages.' },
      { id: 'NEHR.NFN.5', title: 'Scalability', desc: 'Should be scalable to the National context of Sri Lanka with demonstrable performance targets.' },
      { id: 'NEHR.NFN.6', title: 'Configuration', desc: 'The NEHR SHOULD be configurable without an outage, using rolling updates where applicable.' },
      { id: 'NEHR.NFN.7', title: 'On Premises', desc: 'The NEHR SHALL reside, data and compute, within the Sri Lanka data center.' },
      { id: 'NEHR.NFN.8', title: 'Database', desc: 'The NEHR SHALL use a normalized relational database or suitable alternative, suitable for complex queries and export.' },
      { id: 'NEHR.NFN.9', title: 'Database Backups', desc: 'Automatic database backups must be implemented with rotation of older backups as defined by rules.' },
      { id: 'NEHR.NFN.10', title: 'Data and Application Security', desc: 'Data should be encrypted at rest and in transit. Solution should follow industry best practices for cyber security.' },
      { id: 'NEHR.NFN.11', title: 'Prevent Vendor Lock-in', desc: 'Technologies should provide standard means of accessing data without locking the client into proprietary formats.' },
      { id: 'NEHR.NFN.12', title: 'Documentation', desc: 'System documentation should include background, design, installation, configuration, operational docs, and source code comments.' },
      { id: 'NEHR.NFN.13', title: 'Source Code Management', desc: 'A standard version control system (e.g., GitHub) should be used for fast, easy source code access.' },
      { id: 'NEHR.NFN.14', title: 'Use of Open Technologies', desc: 'System should be built on popular, widely accepted technologies. Third-party libraries should be easy to use.' },
      { id: 'NEHR.NFN.15', title: 'Resource-Constrained Settings', desc: 'System should account for limited IT infrastructure: electricity, internet and/or technical literacy may be limited.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NHDX/IOL NFRs (15 requirements: IOL.NFN.1–15)
  // ─────────────────────────────────────────────────────────────────────────
  NHDX: {
    label: 'National Health Data Exchange',
    color: 'indigo',
    nfrs: [
      { id: 'IOL.NFN.1', title: 'Performance – Message Routing', desc: '99.9% of all synchronous transactions SHALL be less than 1s.' },
      { id: 'IOL.NFN.2', title: 'Performance – Transformation', desc: '99.9% of all synchronous message transformation/mediation transactions SHALL be less than 2s.' },
      { id: 'IOL.NFN.3', title: 'Performance – Orchestration', desc: '99.9% of all synchronous orchestration & routing transactions SHALL be less than 2s.' },
      { id: 'IOL.NFN.4', title: 'Availability', desc: 'The IOL SHALL be available 99.999% of the time, excluding planned outages.' },
      { id: 'IOL.NFN.5', title: 'Scalability', desc: 'Should be scalable to the National context of Sri Lanka with demonstrable performance targets.' },
      { id: 'IOL.NFN.6', title: 'Configuration', desc: 'The IOL SHOULD be configurable without an outage, using Kubernetes rolling updates where applicable.' },
      { id: 'IOL.NFN.7', title: 'On Premises', desc: 'The IOL SHALL reside, data and compute, within the Sri Lanka data center.' },
      { id: 'IOL.NFN.8', title: 'Database', desc: 'The IOL SHALL use a normalized relational database or suitable alternative for complex queries and export.' },
      { id: 'IOL.NFN.9', title: 'Database Backups', desc: 'Automatic database backups must be implemented with rotation of older backups as defined by rules.' },
      { id: 'IOL.NFN.10', title: 'Data and Application Security', desc: 'Data should be encrypted at rest and in transit. Solution should follow industry best practices for cyber security.' },
      { id: 'IOL.NFN.11', title: 'Prevent Vendor Lock-in', desc: 'Technologies should provide standard means of accessing data without proprietary formats or storage mechanisms.' },
      { id: 'IOL.NFN.12', title: 'Documentation', desc: 'System documentation should include background, design, installation, configuration, and operational documentation.' },
      { id: 'IOL.NFN.13', title: 'Source Code Management', desc: 'A standard version control system (e.g., GitHub) should be used for source code access.' },
      { id: 'IOL.NFN.14', title: 'Use of Open Technologies', desc: 'System SHOULD be built using widely adopted, open technologies for ease of deployment and sustainability.' },
      { id: 'IOL.NFN.15', title: 'Optimal Use of IT Infrastructure', desc: 'System should account for the established shared IT infrastructure and optimally use it.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // IDP NFRs (17 requirements: NFR-01 through NFR-19, gaps at 11 and 14)
  // ─────────────────────────────────────────────────────────────────────────
  IDP: {
    label: 'Identity Provider',
    color: 'violet',
    nfrs: [
      { id: 'NFR-01', title: 'Security', desc: 'Encryption at rest (bcrypt) and in transit (TLS 1.2+). Resist brute-force, replay via rate limiting, CAPTCHA, token rotation. FIPS-validated crypto modules. Privacy by design.' },
      { id: 'NFR-02', title: 'Performance', desc: 'Authentication response time ≤600ms median (OIDC flow). Support 5,000 logins/min sustained and 100,000 token validations/min.' },
      { id: 'NFR-03', title: 'Scalability', desc: 'Scale horizontally to millions of users nationally with load balancing and automatic scaling for peak loads.' },
      { id: 'NFR-04', title: 'Availability/Reliability', desc: '99.9% uptime with failover, geo-redundancy, no downtime during key rotation. DR: RPO ≤15min, RTO ≤1hr. Offline operations for up to 72 hours.' },
      { id: 'NFR-05', title: 'Usability', desc: 'Intuitive UIs (Admin Console, self-service portals) via web and mobile. Localization and WCAG 2.1 AA accessibility.' },
      { id: 'NFR-06', title: 'Maintainability', desc: 'Modular architecture for easy updates, comprehensive documentation, APIs, backward compatibility for 2+ major versions.' },
      { id: 'NFR-07', title: 'Interoperability', desc: 'Comply with OIDC, SAML, SCIM for provisioning. Support SMART on FHIR, IHE XUA, IUA, and federation with third-party IdPs.' },
      { id: 'NFR-08', title: 'Data Privacy', desc: 'Data residency compliance, anonymized logging, configurable retention policies. Support consent withdrawal, data export/deletion.' },
      { id: 'NFR-09', title: 'Backup and Recovery', desc: 'Automated backups with point-in-time recovery, tested quarterly. DR plans with RTO ≤1hr, RPO ≤15min.' },
      { id: 'NFR-10', title: 'Monitoring and Alerting', desc: 'Real-time monitoring of health, security events, performance. Automated alerts for anomalies. Structured logs and metrics.' },
      { id: 'NFR-12', title: 'Environmental Compliance', desc: 'Support on-premises, cloud, or hybrid deployment. Energy-efficient operations aligned with green IT standards.' },
      { id: 'NFR-13', title: 'Key Management', desc: 'Integrate with HSM or KMS for secure key custody and management.' },
      { id: 'NFR-15', title: 'Time Synchronization', desc: 'Ensure accurate time synchronization via NTP across all components.' },
      { id: 'NFR-16', title: 'Cryptography Standards', desc: 'Use FIPS-validated cryptographic modules for all operations.' },
      { id: 'NFR-17', title: 'Observability Expansion', desc: 'Provide metrics on authentication events, latencies, and MFA interactions for APM integration.' },
      { id: 'NFR-18', title: 'Privacy by Design', desc: 'Incorporate privacy by design principles in all features.' },
      { id: 'NFR-19', title: 'Accessibility Compliance', desc: 'Meet WCAG 2.1 AA standards for all user-facing interfaces.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // TS NFRs (18 requirements: TS.NFN.1–18)
  // ─────────────────────────────────────────────────────────────────────────
  TS: {
    label: 'Terminology Services',
    color: 'teal',
    nfrs: [
      { id: 'TS.NFN.1', title: 'Performance – Terminology Query', desc: '99.9% of all synchronous terminology query operations SHALL complete within 1 second under normal load.' },
      { id: 'TS.NFN.2', title: 'Performance – Bulk Import/Export', desc: '99.9% of bulk import/export operations SHALL complete within acceptable batch processing windows.' },
      { id: 'TS.NFN.3', title: 'Performance – Translation/Transcoding', desc: '99.9% of all synchronous code translation/transcoding requests SHALL complete within 2 seconds.' },
      { id: 'TS.NFN.4', title: 'Availability', desc: 'The Terminology Service SHALL be available 99.9% of the time, excluding planned maintenance.' },
      { id: 'TS.NFN.5', title: 'Scalability', desc: 'SHOULD be horizontally scalable to support national-scale usage from multiple EMRs/HISes and analytics platforms.' },
      { id: 'TS.NFN.6', title: 'Configurability', desc: 'SHOULD support configuration changes (new code systems, value sets, versions) without system downtime.' },
      { id: 'TS.NFN.7', title: 'Deployment Location', desc: 'SHALL reside, data and compute, within Sri Lanka data centres in compliance with national data residency.' },
      { id: 'TS.NFN.8', title: 'Database Design', desc: 'SHALL use a well-structured database supporting versioned terminologies, relationships, multilingual labels, and efficient querying.' },
      { id: 'TS.NFN.9', title: 'Database Backup and Recovery', desc: 'Automated backups with defined frequency, retention, and rotation. Support point-in-time recovery and periodic testing.' },
      { id: 'TS.NFN.10', title: 'Data and Application Security', desc: 'Follow industry best practices: secure APIs, RBAC, audit logging, and vulnerability management.' },
      { id: 'TS.NFN.11', title: 'Standards Compliance', desc: 'Conform to HL7 FHIR Terminology resources (CodeSystem, ValueSet, ConceptMap) and OpenHIE architectural guidance.' },
      { id: 'TS.NFN.12', title: 'Prevention of Vendor Lock-in', desc: 'Avoid proprietary data formats. Provide standard mechanisms for data access and export enabling platform migration.' },
      { id: 'TS.NFN.13', title: 'Multilingual Support', desc: 'Support Sinhala and Tamil for code displays, descriptions, translations, and transliterations. Translation by competent medical translators.' },
      { id: 'TS.NFN.14', title: 'Auditability and Traceability', desc: 'Maintain audit logs for terminology changes including imports, updates, version changes, and mappings.' },
      { id: 'TS.NFN.15', title: 'Documentation', desc: 'Comprehensive documentation: architecture, configuration, terminology lifecycle management, API usage, operational procedures.' },
      { id: 'TS.NFN.16', title: 'Source Code Management', desc: 'Git-based version control for source code, configuration, and deployment artifacts.' },
      { id: 'TS.NFN.17', title: 'Use of Open Technologies', desc: 'SHOULD be built using widely adopted, open technologies for ease of deployment and long-term sustainability.' },
      { id: 'TS.NFN.18', title: 'Resource-Constrained Optimization', desc: 'SHOULD minimize bandwidth usage, support caching of commonly used value sets, maintain acceptable performance under limited infrastructure.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ER NFRs (24 requirements: ER.NFN.0–23)
  // ─────────────────────────────────────────────────────────────────────────
  ER: {
    label: 'e-Referral System',
    color: 'emerald',
    nfrs: [
      { id: 'ER.NFN.0', title: 'Performance – Get', desc: '99.9% of all synchronous search-get transactions using a FHIR ID SHALL respond in less than 1 second.' },
      { id: 'ER.NFN.1', title: 'Performance – Search', desc: '99.9% of all synchronous search transactions with parameters SHALL respond in less than 2 seconds.' },
      { id: 'ER.NFN.2', title: 'Performance – Create', desc: '99.9% of all synchronous create transactions SHALL complete in less than 2 seconds.' },
      { id: 'ER.NFN.3', title: 'Performance – Update', desc: '99.9% of all synchronous update transactions SHALL complete in less than 2 seconds.' },
      { id: 'ER.NFN.4', title: 'Availability', desc: 'The system SHALL be available 99.999% of the time, excluding planned outages.' },
      { id: 'ER.NFN.5', title: 'Configuration & Deployment', desc: 'SHOULD support configuration changes and upgrades without service outage, using rolling updates.' },
      { id: 'ER.NFN.6', title: 'Data Residency', desc: 'SHALL host all data and compute within Sri Lanka-approved government or authorised national data centres.' },
      { id: 'ER.NFN.7', title: 'Notification Performance', desc: '99.9% of all notification messages SHALL be transmitted within 5 seconds of the triggering event.' },
      { id: 'ER.NFN.8', title: 'Scalability', desc: 'SHALL scale horizontally to support national-level referral and appointment volumes.' },
      { id: 'ER.NFN.9', title: 'Peak Load Handling', desc: 'SHALL support peak load conditions (epidemics, seasonal surges) and degrade gracefully when thresholds exceeded.' },
      { id: 'ER.NFN.10', title: 'Interoperability Compliance', desc: 'SHALL comply with national interoperability standards including FHIR R4 and national profiles.' },
      { id: 'ER.NFN.11', title: 'Security – Data in Transit', desc: 'All data exchanges SHALL be encrypted in transit using nationally approved cryptographic standards.' },
      { id: 'ER.NFN.12', title: 'Security – Data at Rest', desc: 'All persisted data SHALL be encrypted at rest using nationally approved encryption mechanisms.' },
      { id: 'ER.NFN.13', title: 'Authentication & Authorisation', desc: 'SHALL integrate with national Identity Provider and enforce RBAC and organisation-based access control.' },
      { id: 'ER.NFN.14', title: 'Auditability', desc: 'All user actions, system actions, overrides, config changes, and security events SHALL be fully auditable and tamper-resistant.' },
      { id: 'ER.NFN.15', title: 'Observability & Monitoring', desc: 'SHALL provide real-time monitoring of performance, availability, errors, and security events with dashboards and alerts.' },
      { id: 'ER.NFN.16', title: 'Analytics Isolation', desc: 'Reporting and analytical workloads SHALL not adversely impact transactional performance.' },
      { id: 'ER.NFN.17', title: 'Reliable Messaging', desc: 'SHALL ensure reliable message delivery using retries, queuing, and dead-letter mechanisms.' },
      { id: 'ER.NFN.18', title: 'Data Integrity', desc: 'SHALL ensure idempotency for create/update operations and prevent duplicate referral or appointment records.' },
      { id: 'ER.NFN.19', title: 'Backup & Recovery', desc: 'SHALL support automated backups and restoration with defined RPO and RTO.' },
      { id: 'ER.NFN.20', title: 'Maintainability', desc: 'SHALL be modular, well-documented, and maintainable to support upgrades and vendor independence.' },
      { id: 'ER.NFN.21', title: 'Configurable SLAs', desc: 'Performance thresholds, notification timings, quotas, and alert thresholds SHALL be configurable without code changes.' },
      { id: 'ER.NFN.22', title: 'Usability & Accessibility', desc: 'SHALL support multilingual interfaces and comply with national accessibility standards.' },
      { id: 'ER.NFN.23', title: 'Compliance & Governance', desc: 'SHALL comply with national data protection laws, cybersecurity policies, and digital health governance requirements.' }
    ]
  }

};
