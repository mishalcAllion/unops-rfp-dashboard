// citations.js — All RFP citation data for tooltip system
// Source: RFP PDF_MD_CONVERT.md (RFP/2026/61570)
// Each key maps to { section, quote } — verbatim from the MD source

const rfpCitations = {

  // ── Background & Project Context ──────────────────────────────────────────
  hiq_project: {
    section: "Section 1.1 — About HiQi Project",
    quote: "The Health Information and Quality Improvement Project (HIQIP) is a major initiative implemented by the Ministry of Health as the Principal Recipient of a grant from the Federal Government of Germany and managed by the Global Fund to Fight AIDS, Tuberculosis and Malaria (GFATM). The project, running from July 1, 2021, to December 2026, focuses on strengthening health systems through integration and interoperability of health data systems."
  },
  budget_total: {
    section: "Section 1.2 — Introduction to the Digital Health Platform",
    quote: "The Procurement Plan, with a budget of approximately USD 20 million, aligns the Roadmap's components with the budget lines available through the Debt for Health Swap program. This ensures that the Ministry of Health's budget and expenditure forecasts are consistent with the demands and framework outlined in the blueprint."
  },
  thin_slice: {
    section: "Section 1.2 — Introduction to the Digital Health Platform",
    quote: "Considering the extensive nature of the National Digital Health Blueprint, a prioritization exercise has been undertaken to identify a 'thin-slice' of it to be implemented during the HiQi / D2H project period extending up to December 2026."
  },
  bundle_2: {
    section: "Section 1.2 — Bundle Table",
    quote: "Bundle 2 — NEHR: National Electronic Health Record, National Health Data Exchange (& API Manager functionality), Identity Provider, Terminology Services (Including Medication and Device Registry), e-Referral Systems (with appointment functionality)."
  },
  dhp_purpose: {
    section: "Section 1.2 — Digital Health Platform (DHP)",
    quote: "The National Digital Health Blueprint aims to establish a shared vision and understanding of an interoperable digital health record system in Sri Lanka. It will create an integrated digital health ecosystem that shares important clinical data for clinical care, public health, decision making and research."
  },

  // ── System Definitions ────────────────────────────────────────────────────
  nehr_definition: {
    section: "Section 2 — National Electronic Health Record (NEHR)",
    quote: "The National Electronic Health Record (NEHR) will serve as the authoritative longitudinal health record for every individual, consolidating clinical encounters, laboratory and imaging results, diagnoses, treatments, referrals, and care plans across all levels of the health system. Built on open standards, the NEHR will ensure continuity of care across primary, secondary and tertiary services, and interoperable linkages with existing EMR/EHR solutions and national registries."
  },
  nehr_patient_access: {
    section: "Section 2 — Patient Access to the National Electronic Health Record (NEHR)",
    quote: "The Patient Access Module of the National Electronic Health Record (NEHR) shall be a centralized, secure, and standards-based digital service that enables patients—and, where authorized, clinicians—to access, view, and manage longitudinal health records held within the NEHR. Delivered as a responsive web application accessible via mobile, tablet, and desktop devices."
  },
  nhdx_definition: {
    section: "Section 2 — National Health Data Exchange (NHDX) with API Manager functionality",
    quote: "The National Health Data Exchange will function as the central interoperability layer enabling secure, standards-based data exchange across all digital health components, including EMRs, disease surveillance systems, drug distribution systems, Common Registries (Client, Provider and Facility). Anchored on HL7 FHIR and open APIs, the NHDX will include an API management layer for authentication, throttling, monitoring, error handling, logging and analytics."
  },
  nhdx_connectathon: {
    section: "Section 2 — National Health Data Exchange (NHDX)",
    quote: "The vendor will provide comprehensive integration support to connect existing Hospital Information Systems and Electronic Medical Record systems. The vendor should provide clear documentation and organize Connectathons in support of such integrations, provide sandbox environments, and technical support to legacy system vendors (eg: HHIMS, HIMS, OpenMRS, Swastha, CloudHIMS) and facility teams."
  },
  idp_definition: {
    section: "Section 2 — Identity Provider (IdP)",
    quote: "The Identity Provider will deliver secure, scalable authentication and authorization services for all Digital Health Platform components, with initial emphasis on system-level authentication for services connecting to the National Health Data Exchange. Designed using open standards (e.g., OAuth 2, OpenID Connect), the IdP must support token-based access, certificate management, service-to-service trust relationships, and auditing."
  },
  idp_future: {
    section: "Section 2 — Identity Provider (IdP)",
    quote: "The architecture should allow future expansion to person-level identity management, enabling healthcare worker authentication, patient access to personal health records, and federation with national digital ID systems when policy direction allows. Flexibility, extensibility, and security-by-design are mandatory."
  },
  terminology_definition: {
    section: "Section 2 — Terminology Services (Medication and Device Registry)",
    quote: "Terminology Services will provide centralized management of standardized clinical terminologies such as ICD, ICPC, ATC/DDD, SNOMED subsets, medication dictionaries and device catalogues and ensure consistent semantic interoperability across the digital health ecosystem. These services will underpin prescribing, diagnostics, reporting, drug distribution, and analytics functions."
  },
  terminology_multilingual: {
    section: "Section 2 — Terminology Services (Medication and Device Registry)",
    quote: "The solution shall support multilingual management of terminologies, including translations and transliterations of code systems, value sets, and codes that are publicly visible, with authoritative mappings between English, Sinhala, and Tamil, ensuring semantic consistency and equitable access across the national digital health ecosystem."
  },
  ereferral_definition: {
    section: "Section 2 — e-Referral System (with Appointment Management)",
    quote: "The e-Referral and appointment management system will enable structured, traceable, and interoperable referral workflows across preventive, primary, secondary and tertiary care, ensuring timely access to clinical services and continuity of care. Built on open standards and integrated with the core DHP components such as NEHR, Common Registries and NHDX."
  },
  fhir_all: {
    section: "Section 2 — FHIR Support Across All DHP Components",
    quote: "All relevant DHP components must provide standards-based APIs aligned with HL7 FHIR R4 to enable uniform, scalable, and future-proof interoperability across the national ecosystem. FHIR support enables consistent schema definitions, open integration patterns, authorization (including SMART-on-FHIR-based, token based, API Key based), and conformance to international Digital Public Goods best practices."
  },
  open_source_priority: {
    section: "Section 4 — Technical Assessment and Solution Options",
    quote: "Evaluate potential open-source solutions, prioritised as: (1) Open-source with configuration, (2) Open-source with customisation, (3) Bespoke software development. Ensure the use of open standards, open technologies, open content and open architectures (fullSTAC Approach)."
  },
  tech_stack: {
    section: "Section 2 — Commonly Used Technologies and Standards",
    quote: "Languages: Java, Python, JavaScript, PHP. Databases: PostgreSQL, MongoDB, MySQL. Platforms: Web-based, Cloud-friendly, OpenHIE-compatible architecture. Security: OAuth2/OpenID for authentication, TLS 1.2+ for data-in-transit encryption, Role-based access controls. Integration Standards: HL7 FHIR (R4 preferred), IHE profiles (PIX/PDQ, XDS.b), JSON/XML, RESTful APIs, OpenAPI Specification."
  },
  java_php_adapters: {
    section: "Section 4 — Interoperability and Integration",
    quote: "Develop Java and PHP adapter libraries to enable integration with legacy HIS systems. Provide sandbox and production environments for testing integrations."
  },
  slcert: {
    section: "Section 4 — Security and Compliance",
    quote: "The contractor must obtain SLCERT (Sri Lanka Computer Emergency Readiness Team) certification for the developed solution. All security testing and penetration testing must be conducted through Sri Lanka CERT."
  },
  ci_cd: {
    section: "Section 4 — DevOps and Infrastructure",
    quote: "CI/CD pipelines must be established across development, testing, staging, production, and sandbox environments. All source code must be hosted in the MoH-designated codebase repository."
  },

  // ── Timeline & Deliverables ───────────────────────────────────────────────
  inception_deliverable: {
    section: "Section 8 — Time Schedule / Deliverable 1: Inception Report",
    quote: "Deliverable 1 — Inception Report. Due: No later than 4 weeks from contract signature. Payment: 5% of total contract value."
  },
  mvp_deliverable: {
    section: "Section 8 — Time Schedule / Deliverable 2: Minimum Viable Product",
    quote: "Deliverable 2 — Minimum Viable Product (MVP). Due: No later than 10 weeks from acceptance of the Inception Report. Payment: 20% of total contract value."
  },
  connectathon_deliverable: {
    section: "Section 8 — Time Schedule / Deliverable 3: Connectathon",
    quote: "Deliverable 3 — Connectathon Readiness and Execution. Due: No later than 4 weeks from acceptance of the MVP. Payment: 10% of total contract value."
  },
  integration_deliverable: {
    section: "Section 8 — Time Schedule / Deliverable 4: National System Integrations",
    quote: "Deliverable 4 — Integrations with National Systems and Source Code. Due: No later than 4 weeks from the Connectathon. Payment: 20% of total contract value."
  },
  data_population_deliverable: {
    section: "Section 8 — Time Schedule / Deliverable 5: Data Population",
    quote: "Deliverable 5 — Data Population, Mapping, Translations, and Operational Readiness. Due: No later than 2 weeks from acceptance of Deliverable 4. Payment: 5% of total contract value."
  },
  uat_deliverable: {
    section: "Section 8 — Time Schedule / Deliverable 6: UAT",
    quote: "Deliverable 6 — User Acceptance Testing (UAT) and User Acceptance Sign-Off. Due: No later than 2 weeks from acceptance of Deliverable 5. Payment: 10% of total contract value."
  },
  training_deliverable: {
    section: "Section 8 — Time Schedule / Deliverable 7: Training",
    quote: "Deliverable 7 — Guides, Manuals and Training Delivery. Due: No later than 2 weeks from acceptance of Deliverable 6. Payment: 5% of total contract value."
  },
  closeout_deliverable: {
    section: "Section 8 — Time Schedule / Deliverable 8: Final Closeout",
    quote: "Deliverable 8 — Final Report and Closeout. Due: No later than 2 weeks from acceptance of Deliverable 7. Payment: 25% of total contract value."
  },
  warranty: {
    section: "Section 4.7 — Post-Implementation Warranty and Maintenance",
    quote: "Post-contract: 12 months warranty and maintenance support after Go-Live acceptance, including 40 person-days per quarter at no additional cost for minor enhancements (up to 5-6 days per change request)."
  },
  dec_2026_deadline: {
    section: "Section 1.1 — About HiQi Project",
    quote: "The Health Information and Quality Improvement Project (HIQIP)... running from July 1, 2021, to December 2026. This represents the hard external deadline for the entire DHP implementation driven by HiQi funding."
  },

  // ── Financial & Commercial ────────────────────────────────────────────────
  payment_terms: {
    section: "Section 12 — Payment Schedule",
    quote: "Payment is net 30 days from UNOPS and MoH acceptance of each deliverable. Schedule: Deliverable 1: 5%, Deliverable 2: 20%, Deliverable 3: 10%, Deliverable 4: 20%, Deliverable 5: 5%, Deliverable 6: 10%, Deliverable 7: 5%, Deliverable 8: 25% = 100% total."
  },
  fixed_price: {
    section: "Section 9 — Institutional Arrangement",
    quote: "The contract is deliverable-based (milestone-based fixed price). All costs including staff, office, equipment, travel, per diem, tools, licenses, and communication are the contractor's responsibility. No time-and-materials safety net applies."
  },
  lkr_currency: {
    section: "Section 10 — Financial Proposal",
    quote: "The financial proposal must be submitted in Sri Lankan Rupees (LKR). The contract will be executed in LKR. All costs must be inclusive of applicable taxes."
  },
  bond_01: {
    section: "Section 14 — Performance Security / Bond 01",
    quote: "Bond 01: Performance Security equal to 10% of total contract value, submitted within 12 working days of contract award, valid for 12 months, in favor of UNOPS. The bank must carry a minimum BBB- credit rating."
  },
  bond_02: {
    section: "Section 14 — Performance Security / Bond 02",
    quote: "Bond 02: An additional Performance Security equal to 10% of total contract value, valid until the end of the 12-month warranty period, in favor of the MoH end-user. Both bonds required simultaneously."
  },
  maintenance_included: {
    section: "Section 4.7 — Post-Implementation Warranty and Maintenance",
    quote: "The contractor shall provide 40 person-days per quarter at no additional cost for minor enhancements (up to 5-6 days per change request) and bug-fix support during the 12-month warranty period after Go-Live acceptance."
  },

  // ── Intellectual Property ─────────────────────────────────────────────────
  ip_moh: {
    section: "Section 5 — Intellectual Property",
    quote: "All intellectual property including code, documentation, APIs, configurations, test data, and architecture developed under this assignment vests exclusively with the Ministry of Health. The contractor retains zero ownership regardless of the level of innovation."
  },
  no_vendor_lock: {
    section: "Section 5 — Intellectual Property",
    quote: "No proprietary dependencies or vendor lock-in is permitted, by design or by accident. Any attempt to embed proprietary technology or create lock-in constitutes a material breach and grounds for disqualification. Only licenses permitting modification, redistribution, interoperability, and long-term sustainability are allowed."
  },
  third_party_licenses: {
    section: "Section 5 — Intellectual Property",
    quote: "Contractor must disclose all third-party licenses in advance and obtain written MoH approval before use. Only open-source licenses permitting free modification and redistribution are permitted."
  },

  // ── Data Protection & Security ────────────────────────────────────────────
  pdpa: {
    section: "Section 11 — Data Protection",
    quote: "All data handling activities under this contract are governed by Sri Lanka's Personal Data Protection Act (PDPA). The contractor must ensure full compliance with PDPA requirements for personal health data including collection, storage, processing, and deletion."
  },
  data_residency: {
    section: "Annex 2 — NEHR Non-Functional Requirements / NEHR.NFN.7 On Premises",
    quote: "The NEHR SHALL reside, data and compute, within the Sri Lanka data center. All data must be hosted within nationally approved, Sri Lanka-based datacenters."
  },

  // ── NFRs ──────────────────────────────────────────────────────────────────
  nehr_availability: {
    section: "Annex 2 — NEHR Non-Functional Requirements / NEHR.NFN.4 Availability",
    quote: "The NEHR SHALL be available, processing transactions within performance service levels, 99.999% of the time. This requirement does not include planned outages."
  },
  iol_availability: {
    section: "Annex 2 — NHDX/IOL Non-Functional Requirements / IOL.NFN.4 Availability",
    quote: "The IOL SHALL be available, processing transactions within performance service levels, 99.999% of the time. This requirement does not include planned outages."
  },
  er_availability: {
    section: "Annex 2 — e-Referral Non-Functional Requirements / ER.NFN.4 Availability",
    quote: "The system SHALL be available 99.999% of the time, excluding planned outages, while processing transactions within defined performance service levels."
  },
  nehr_performance: {
    section: "Annex 2 — NEHR Non-Functional Requirements / NEHR.NFN.0 Performance – Get",
    quote: "99.9% of all synchronous search-get transactions SHALL be less than 1s. This type of search uses FHIR Identifiers. There should be tests, designed for heavy loads (with synthetic data loads), that test the NEHR's behavior."
  },
  er_notification_perf: {
    section: "Annex 2 — e-Referral Non-Functional Requirements / ER.NFN.7 Notification Performance",
    quote: "99.9% of all notification messages SHALL be transmitted within 5 seconds of the triggering event being processed."
  },
  idp_performance: {
    section: "Annex 2 — IdP Non-Functional Requirements / NFR-02 Performance",
    quote: "The system shall handle authentication requests with a response time of ≤600ms (median OIDC flow) under normal load, support at least 5,000 logins per minute sustained, and 100,000 token validations per minute."
  },
  ts_performance: {
    section: "Annex 2 — Terminology Services Non-Functional Requirements / TS.NFN.1 Performance",
    quote: "99.9% of all synchronous terminology query operations (code lookup, validation, membership check, value set expansion, concept map query) SHALL complete within 1 second under normal operating load."
  },

  // ── NEHR Functional Requirements ──────────────────────────────────────────
  nehr_fhir: {
    section: "Annex 2 — NEHR Functional Requirements / NEHR.FN.0 Message Transport",
    quote: "The NEHR SHALL use HL7 FHIR R4 for all message exchange and query interactions."
  },
  nehr_identifiers: {
    section: "Annex 2 — NEHR Functional Requirements / NEHR.FN.2 Identifier for New Records",
    quote: "The NEHR SHALL allow creation of records when the Client is identified by PHN. The NEHR SHALL support use of additional business identifiers (such as NIC, SLUDI, PP No., DL No., SC No.)"
  },
  nehr_consent: {
    section: "Annex 2 — NEHR Functional Requirements / NEHR.FN.34 Consent Management",
    quote: "The NEHR SHALL support documentation of the consent directives of the patient. Each NEHR transaction request must be checked for compliance with the given consent directives. Transaction should only be allowed if the request aligns with the given directives."
  },
  nehr_audit: {
    section: "Annex 2 — NEHR Functional Requirements / NEHR.FN.7 Audit Logs",
    quote: "The NEHR SHALL generate audit logs for all access events including date, time, user(provider), facility, action, and record."
  },
  nehr_deletion: {
    section: "Annex 2 — NEHR Functional Requirements / NEHR.FN.17 Deletion of Records",
    quote: "The NEHR SHALL support redaction and permanent deletion of clinical data through a controlled administrative process."
  },
  nehr_analytics: {
    section: "Annex 2 — NEHR Functional Requirements / NEHR.FN.32 Advanced Analytics Enablement",
    quote: "The NEHR SHALL support advanced analytics use cases including cohort analysis, indicators, and trend analysis."
  },
  nehr_timeline: {
    section: "Annex 2 — NEHR Functional Requirements / NEHR.FN.27 Encounter Timeline Generation",
    quote: "The NEHR SHALL support generation of a longitudinal patient encounter timeline."
  },
  nehr_bulk: {
    section: "Annex 2 — NEHR Functional Requirements / NEHR.FN.30 Bulk Summary Retrieval",
    quote: "The NEHR SHALL support retrieval of all encounter summaries for a patient in a single query."
  },

  // ── NHDX/IOL Functional Requirements ─────────────────────────────────────
  iol_central: {
    section: "Annex 2 — NHDX Functional Requirements / IOLF-1 Central Point of Access",
    quote: "The Interoperability Layer (IOL) should provide a unified interface to access core HIE services (e.g. CR, PR, FR, SHR), simplifying security management and serving as a single entry point into the HIE."
  },
  iol_routing: {
    section: "Annex 2 — NHDX Functional Requirements / IOLF-2 Message Routing",
    quote: "The IOL shall route incoming messages to the correct service provider systems within the HIE."
  },
  iol_logging: {
    section: "Annex 2 — NHDX Functional Requirements / IOLF-3 Central Logging",
    quote: "The IOL shall log copies of all messages traveling through the exchange for auditing and reporting purposes."
  },
  iol_error: {
    section: "Annex 2 — NHDX Functional Requirements / IOLF-9 Error Management",
    quote: "There should be a mechanism (e.g. a console) for viewing failed transactions and managing errors."
  },
  iol_transformation: {
    section: "Annex 2 — NHDX Functional Requirements / IOLF-5 Message Transformation",
    quote: "If service providers cannot communicate in the internal format, the IOL should support adapters to transform messages between the IOL's internal form and the format expected by service providers."
  },
  iol_orchestration: {
    section: "Annex 2 — NHDX Functional Requirements / IOLF-6 Orchestration & Routing",
    quote: "The IOL should route messages not only within HIE components but also to external Point-of-Service systems; orchestrate complex transactions (possibly interacting with multiple services) and compile appropriate responses back to clients."
  },

  // ── IdP Functional Requirements ───────────────────────────────────────────
  idp_mfa: {
    section: "Annex 2 — IdP Functional Requirements / FR-01 Authentication",
    quote: "The system shall support multi-factor authentication (MFA), including 2FA, configurable based on system criticality (e.g., mandatory for high-risk accesses like patient records). Supported factors include OTP via authenticator apps, email verification, SMS, push notifications, and WebAuthn/FIDO2."
  },
  idp_sso: {
    section: "Annex 2 — IdP Functional Requirements / FR-03 Single Sign-On (SSO)",
    quote: "The system shall provide SSO across the DHP ecosystem, allowing users to authenticate once and access multiple integrated applications without re-authentication, with support for single sign-out to revoke sessions across services."
  },
  idp_realms: {
    section: "Annex 2 — IdP Functional Requirements / FR-04 Realms Management",
    quote: "The system shall manage multiple realms or tenants to isolate user groups (e.g., national vs. hospital-specific realms, per program/region/tenant), each with independent configurations for users, roles, policies, and authentication flows."
  },
  idp_offline: {
    section: "Annex 2 — IdP Functional Requirements / FR-07 Offline/Disconnected Access",
    quote: "The system shall enable local authentication at hospitals when the national identity manager is unreachable (e.g., due to internet outages), using synchronized local identity providers. Offline tokens or cached credentials must be supported, with automatic reconciliation upon reconnection."
  },
  idp_rbac: {
    section: "Annex 2 — IdP Functional Requirements / FR-10 Authorization",
    quote: "The system shall enforce fine-grained authorization policies, including attribute-based access control (ABAC) and policy enforcement points, to restrict access based on user roles, criticality, and context (e.g., location, time)."
  },
  idp_emergency: {
    section: "Annex 2 — IdP Functional Requirements / FR-17 Emergency Access",
    quote: "The system shall provide break-glass emergency access workflows, including justification prompts, enhanced auditing, and notifications, aligned with HIPAA emergency access requirements."
  },

  // ── Terminology Functional Requirements ───────────────────────────────────
  ts_import: {
    section: "Annex 2 — Terminology Services / TSF-1 Import Code Systems",
    quote: "The TS must support import of both local (e.g. local lab codes) and standard code systems (e.g. LOINC). Including bulk and individual import of codes."
  },
  ts_versioning: {
    section: "Annex 2 — Terminology Services / TSF-3 Versioning of Code Systems",
    quote: "TS should support multiple versions of a code system accessible through the service."
  },
  ts_concept_maps: {
    section: "Annex 2 — Terminology Services / TSF-9 Import Concept Maps",
    quote: "TS must support importing relationships (maps) between codes (e.g. mapping between a source code system and a target)."
  },
  ts_translation_fn: {
    section: "Annex 2 — Terminology Services / TSF-14 Translation and Transliterations",
    quote: "Translation and Transliterations of code systems, value sets, etc. Required especially for public facing data."
  },
  ts_workflow: {
    section: "Annex 2 — Terminology Services / TSF-15 Code System Management",
    quote: "Should support the code system management functionalities. Enable additions, updates and deprecation of codes. Should support approval workflows for the codes. Should support automated publishing and version control of code systems and value sets."
  },
  ts_sync: {
    section: "Annex 2 — Terminology Services / TSF-16 Terminology Synchronization",
    quote: "Should support the Terminology Synchronization with upstream Terminology Servers (Ex: Reference LOINC TS)."
  },
  ts_multilingual_nfn: {
    section: "Annex 2 — Terminology Services Non-Functional Requirements / TS.NFN.13 Multilingual Support",
    quote: "The Terminology Service SHALL support multiple languages, including Sinhala and Tamil, for code displays, descriptions, translations, and transliterations, particularly for public-facing applications. Translation of codes must be handled by the vendor through a suitably competent translator(s) with knowledge on medical terms."
  },

  // ── e-Referral Functional Requirements ───────────────────────────────────
  er_registry: {
    section: "Annex 2 — e-Referral Functional Requirements / RAM-001 Registry Integration",
    quote: "The system shall integrate with the Client Registry, Provider Registry, and Facility Registry to validate patients, providers, organisations, locations, and services in real time."
  },
  er_creation: {
    section: "Annex 2 — e-Referral Functional Requirements / RAM-005 Electronic Referral Creation",
    quote: "The system shall support creation of structured electronic referrals including reason for referral, urgency, and clinical context."
  },
  er_status: {
    section: "Annex 2 — e-Referral Functional Requirements / RAM-007 Referral Status Tracking",
    quote: "The system shall track referral status across its lifecycle (created, accepted, scheduled, completed, cancelled, expired)."
  },
  er_session: {
    section: "Annex 2 — e-Referral Functional Requirements / RAM-013 Session Management",
    quote: "The system shall support defining sessions (daily, weekly, bi-weekly, monthly, or ad-hoc) for clinics and services."
  },
  er_notifications: {
    section: "Annex 2 — e-Referral Functional Requirements / RAM-028 Patient Notifications",
    quote: "The system shall send automated notifications (SMS, email, app) for appointments, reminders, changes, and cancellations."
  },
  er_analytics: {
    section: "Annex 2 — e-Referral Functional Requirements / RAM-030 Referral & Appointment Analytics",
    quote: "The system shall provide analytics on referral volumes, appointment lead times, completion rates, and utilisation."
  },
  er_quota: {
    section: "Annex 2 — e-Referral Functional Requirements / RAM-017 Quota Allocation per Referrer",
    quote: "The system shall allow allocation of appointment quotas within a session based on the referring unit or institution."
  },
  er_disruption: {
    section: "Annex 2 — e-Referral Functional Requirements / RAM-021 Disruption Management",
    quote: "The system shall support suspension or modification of sessions due to trade union actions, emergencies, or administrative directives."
  },

  // ── Common Requirements ───────────────────────────────────────────────────
  cc_no_duplication: {
    section: "Annex 2 — Common Requirements / CC.INT.13 No Duplication of Common Services",
    quote: "The solution SHALL NOT design, develop, procure, or operate duplicate implementations of certificate management, audit repositories, ETL pipelines, time services, or APM platforms."
  },
  cc_cert_integration: {
    section: "Annex 2 — Common Requirements / CC.INT.01 Integration with Certificate Services",
    quote: "The solution SHALL integrate with the nationally provided Certificate Services for digital certificate issuance, renewal, revocation, and trust validation. The solution SHALL NOT develop or embed its own certificate authority."
  },
  cc_apm: {
    section: "Annex 2 — Common Requirements / CC.INT.03 Application Performance Monitoring",
    quote: "The solution SHALL integrate with the centrally provided Application Performance Monitoring (APM) platform for performance, availability, and resource utilisation monitoring. The solution SHALL NOT implement a separate APM solution."
  },

  // ── Team Requirements ─────────────────────────────────────────────────────
  team_size: {
    section: "Section 7 — Team Requirements",
    quote: "Minimum 15 key personnel required: Project Manager/Team Lead, Software Architect, 5 Software Engineers, 2 DevOps Engineers, Cybersecurity Engineer, Health Informatician, 2 Business Analysts, and 2 QA Engineers. All must be deployed full-time in Sri Lanka."
  },
  pm_requirement: {
    section: "Section 7 — Team Requirements / Project Manager / Team Lead",
    quote: "Project Manager / Team Lead: minimum 8 years experience in project management; experience in large-scale digital health or enterprise IT; PMP or PRINCE2 certification required; Sinhala or Tamil language proficiency preferred."
  },
  staff_sri_lanka: {
    section: "Section 7 — Team Requirements",
    quote: "All key personnel must be deployed full-time in Sri Lanka and must be direct staff (employees) of the winning firm. Staff assigned to full-time roles must be unique per bundle if the firm is bidding on multiple bundles."
  },
  health_informatician: {
    section: "Section 7 — Team Requirements / Health Informatician",
    quote: "Health Informatician: Degree in medicine or health IT with postgraduate qualification in Health Informatics; FHIR certification preferred; experience with clinical terminology, FHIR, and health data standards required."
  },

  // ── Firm Eligibility ──────────────────────────────────────────────────────
  turnover_req: {
    section: "Section 7 — Mandatory Firm Qualifications",
    quote: "Average annual sales turnover of at least USD 2.5 million for the last three financial years, as evidenced by audited financial statements."
  },
  experience_req: {
    section: "Section 7 — Mandatory Firm Qualifications",
    quote: "Minimum 10 years of cumulative software development experience; minimum 5 years of large-scale software/ICT integration experience at national, multinational, or enterprise level."
  },
  digital_health_req: {
    section: "Section 7 — Mandatory Firm Qualifications",
    quote: "At least one completed digital health project (documented with purchase order or signed contract) and at least one project for a Sri Lankan government entity, UN agency, or donor-funded project in the last 5 years."
  },
  liquidity_req: {
    section: "Section 7 — Mandatory Firm Qualifications",
    quote: "Liquidity ratio of at least 1, as demonstrated by audited financial accounts for the last 2 years. The firm must be legally registered and operating in Sri Lanka."
  }
};
