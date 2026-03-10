// requirements-data.js — All functional requirements from RFP/2026/61570, Annex 2
// Structured by system → functional area → individual requirement
// mvp: true = Allion Tech's recommended MVP scope (confirmed in Inception Report, Week 4)
// Includes: NEHR (35 FRs), PAM (35 FRs), NHDX (17 FRs), IDP (28 FRs), TS (18 FRs), ER (38 FRs), CC (15 FRs) = 186 total

const rfpRequirements = {

  // ─────────────────────────────────────────────────────────────────────────
  // NEHR — National Electronic Health Record (35 FRs)
  // ─────────────────────────────────────────────────────────────────────────
  NEHR: {
    label: 'National Electronic Health Record',
    color: 'blue',
    areas: [
      {
        id: 'nehr-fhir',
        label: 'FHIR Transport & Interfaces',
        mvp: true,
        requirements: [
          {
            id: 'NEHR.FN.0',
            title: 'HL7 FHIR R4 Transport',
            mvp: true,
            cite: 'nehr_fhir',
            desc: 'The NEHR SHALL use HL7 FHIR R4 for all message exchange and query interactions.'
          },
          {
            id: 'NEHR.FN.1',
            title: 'FHIR Implementation Guide Support',
            mvp: true,
            cite: 'fhir_all',
            desc: 'The NEHR SHALL support all interfaces, profiles, extensions, and value sets defined in the NEHR FHIR Implementation Guide, and must provide standards-based APIs aligned with HL7 FHIR R4.'
          }
        ]
      },
      {
        id: 'nehr-identity',
        label: 'Patient Identity & Demographics',
        mvp: true,
        requirements: [
          {
            id: 'NEHR.FN.2',
            title: 'Patient Identification via PHN',
            mvp: true,
            cite: 'nehr_identifiers',
            desc: 'The NEHR SHALL allow creation of records when the Client is identified by PHN. Additional business identifiers (NIC, SLUDI, Passport, DL, SC) must also be supported.'
          },
          {
            id: 'NEHR.FN.2.1',
            title: 'Patient Minimum Dataset',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL only allow creation or update of a patient record when a minimum patient dataset is provided (e.g., PHN, name, date of birth, gender, address).'
          },
          {
            id: 'NEHR.FN.4',
            title: 'Demographics Update',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL support update of patient demographic information by authorised users, with full audit trail of all changes.'
          },
          {
            id: 'NEHR.FN.25',
            title: 'Death Declaration',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL support recording of patient death declarations, flagging the record appropriately and preventing further clinical data entry post-declaration.'
          },
          {
            id: 'NEHR.FN.26',
            title: 'Patient Merge',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL support merging of duplicate patient records with full preservation of clinical history and audit trail of the merge action.'
          },
          {
            id: 'NEHR.FN.28',
            title: 'Patient Record Filtering',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL support filtering patient records by provider, facility, bundle/resource type, and time range to enable focused clinical views.'
          }
        ]
      },
      {
        id: 'nehr-submission',
        label: 'Record Submission & Validation',
        mvp: true,
        requirements: [
          {
            id: 'NEHR.FN.14',
            title: 'FHIR Bundle Submission',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL accept clinical data submission via FHIR bundles from authorised source systems (EMRs, HIS) with validation against defined profiles.'
          },
          {
            id: 'NEHR.FN.15',
            title: 'Submission Validation',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL validate incoming data against defined FHIR profiles, code systems, and business rules, returning structured OperationOutcome responses for validation failures.'
          },
          {
            id: 'NEHR.FN.15.1',
            title: 'Terminology Validation',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL validate all submitted clinical codes (diagnoses, procedures, medications) against the Terminology Services value sets and code systems in real time.'
          },
          {
            id: 'NEHR.FN.18',
            title: 'Duplicate Detection',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL detect and flag potential duplicate clinical records during submission, preventing creation of conflicting or redundant entries.'
          },
          {
            id: 'NEHR.FN.19',
            title: 'Asynchronous Bulk Submission',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL support asynchronous bulk data submission for large clinical datasets, with job status tracking and error reporting per submitted record.'
          },
          {
            id: 'NEHR.FN.24',
            title: 'Referential Integrity',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL enforce referential integrity so that clinical records link only to validated patient, provider, and facility identifiers sourced from the Common Registries.'
          }
        ]
      },
      {
        id: 'nehr-clinical',
        label: 'Clinical Records Management',
        mvp: true,
        requirements: [
          {
            id: 'NEHR.FN.20',
            title: 'Encounter Summary Storage',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL store structured encounter summaries including chief complaint, diagnoses, procedures, medications, observations, and discharge information.'
          },
          {
            id: 'NEHR.FN.21',
            title: 'Laboratory & Imaging Results',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL store and retrieve laboratory test results and diagnostic imaging reports, linked to the patient encounter and requesting provider.'
          },
          {
            id: 'NEHR.FN.22',
            title: 'Medication & Prescription Records',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL store medication prescription and dispensing records with drug-drug interaction validation using the Terminology Services drug interaction database.'
          },
          {
            id: 'NEHR.FN.23',
            title: 'Care Plan Management',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL support creation, update, and retrieval of care plans for patients with chronic conditions, linked to relevant encounters and clinical context.'
          }
        ]
      },
      {
        id: 'nehr-consent',
        label: 'Consent & Temporary Access',
        mvp: true,
        requirements: [
          {
            id: 'NEHR.FN.3',
            title: 'Temporary Access Grant',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL support granting temporary access to specific patient records for defined time periods and purposes, with automatic expiry and audit trail.'
          },
          {
            id: 'NEHR.FN.34',
            title: 'Consent Management',
            mvp: true,
            cite: 'nehr_consent',
            desc: 'The NEHR SHALL support documentation of patient consent directives. Each transaction must be checked for compliance with consent directives; transactions are only allowed if aligned with directives.'
          }
        ]
      },
      {
        id: 'nehr-access',
        label: 'Access Control & Security',
        mvp: true,
        requirements: [
          {
            id: 'NEHR.FN.5',
            title: 'Role-Based Access Control',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL enforce role-based access control (RBAC) restricting data visibility and operations to authorised users based on their assigned clinical roles.'
          },
          {
            id: 'NEHR.FN.11',
            title: 'Provider Authentication via IdP',
            mvp: true,
            cite: 'idp_definition',
            desc: 'The NEHR SHALL authenticate all provider access requests via the centralised Identity Provider using OAuth2/OIDC token-based authentication.'
          },
          {
            id: 'NEHR.FN.12',
            title: 'Break-Glass Emergency Access',
            mvp: true,
            cite: 'idp_emergency',
            desc: 'The NEHR SHALL support emergency break-glass access for clinicians when normal access pathways are unavailable, with mandatory justification capture and enhanced auditing.'
          }
        ]
      },
      {
        id: 'nehr-audit',
        label: 'Audit Logs',
        mvp: true,
        requirements: [
          {
            id: 'NEHR.FN.7',
            title: 'Access Audit Logs',
            mvp: true,
            cite: 'nehr_audit',
            desc: 'The NEHR SHALL generate audit logs for all access events including date, time, user (provider), facility, action performed, and record accessed.'
          },
          {
            id: 'NEHR.FN.8',
            title: 'Audit Log Query',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL support querying of audit logs by authorised administrators with filters for date range, user, facility, and action type.'
          },
          {
            id: 'NEHR.FN.9',
            title: 'Audit Log Export',
            mvp: true,
            cite: null,
            desc: 'The NEHR SHALL support export of audit logs in structured formats (JSON, CSV) for compliance reporting and submission to the national Audit Repository.'
          }
        ]
      },
      {
        id: 'nehr-lifecycle',
        label: 'Data Lifecycle',
        mvp: false,
        requirements: [
          {
            id: 'NEHR.FN.10',
            title: 'Data Archival',
            mvp: false,
            cite: null,
            desc: 'The NEHR SHALL support archival of inactive patient records to secondary storage tiers with preservation of full clinical history and retrieval capability.'
          },
          {
            id: 'NEHR.FN.16',
            title: 'Data Correction Workflow',
            mvp: false,
            cite: null,
            desc: 'The NEHR SHALL support a formal data correction workflow allowing authorised clinicians to amend erroneous clinical data with full version history preservation.'
          },
          {
            id: 'NEHR.FN.17',
            title: 'Redaction & Permanent Deletion',
            mvp: false,
            cite: 'nehr_deletion',
            desc: 'The NEHR SHALL support redaction and permanent deletion of clinical data through a controlled administrative process, with legal basis documentation and comprehensive audit.'
          }
        ]
      },
      {
        id: 'nehr-timeline',
        label: 'Encounter Timeline & History',
        mvp: false,
        requirements: [
          {
            id: 'NEHR.FN.27',
            title: 'Encounter Timeline Generation',
            mvp: false,
            cite: 'nehr_timeline',
            desc: 'The NEHR SHALL support generation of a longitudinal patient encounter timeline showing all clinical interactions across facilities in chronological order.'
          },
          {
            id: 'NEHR.FN.29',
            title: 'Cross-Facility History View',
            mvp: false,
            cite: null,
            desc: 'The NEHR SHALL provide a unified cross-facility clinical history view enabling clinicians to see all prior encounters, diagnoses, and treatments regardless of originating facility.'
          },
          {
            id: 'NEHR.FN.30',
            title: 'Bulk Encounter Summary Retrieval',
            mvp: false,
            cite: 'nehr_bulk',
            desc: 'The NEHR SHALL support retrieval of all encounter summaries for a patient in a single query, supporting both paginated and bulk FHIR export patterns.'
          },
          {
            id: 'NEHR.FN.31',
            title: 'Sinhala / Tamil Patient View',
            mvp: false,
            cite: 'terminology_multilingual',
            desc: 'The NEHR Patient Access Module SHALL display clinical data with Sinhala and Tamil translations for patient-facing terminology, codes, and labels.'
          },
          {
            id: 'NEHR.FN.33',
            title: 'Patient Self-Access Portal',
            mvp: false,
            cite: 'nehr_patient_access',
            desc: 'The NEHR SHALL provide a patient-facing web portal (responsive, mobile/tablet/desktop) enabling patients to view their own longitudinal health records with appropriate consent controls.'
          }
        ]
      },
      {
        id: 'nehr-analytics',
        label: 'Analytics & Reporting',
        mvp: false,
        requirements: [
          {
            id: 'NEHR.FN.32',
            title: 'Advanced Analytics Enablement',
            mvp: false,
            cite: 'nehr_analytics',
            desc: 'The NEHR SHALL support advanced analytics use cases including cohort analysis, clinical indicators, and trend analysis, with data export capabilities for research and public health.'
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NHDX — National Health Data Exchange / Interoperability Layer (17 FRs)
  // ─────────────────────────────────────────────────────────────────────────
  NHDX: {
    label: 'National Health Data Exchange',
    color: 'indigo',
    areas: [
      {
        id: 'nhdx-access',
        label: 'Core Access & Routing',
        mvp: true,
        requirements: [
          {
            id: 'IOLF-1',
            title: 'Central Point of Access',
            mvp: true,
            cite: 'iol_central',
            desc: 'The IOL shall provide a unified interface to access core HIE services (Client Registry, Provider Registry, Facility Registry, SHR), simplifying security management and serving as a single entry point into the HIE.'
          },
          {
            id: 'IOLF-2',
            title: 'Message Routing',
            mvp: true,
            cite: 'iol_routing',
            desc: 'The IOL shall route incoming messages to the correct service provider systems within the HIE based on message type, destination, and routing rules.'
          }
        ]
      },
      {
        id: 'nhdx-logging',
        label: 'Central Logging & Audit',
        mvp: true,
        requirements: [
          {
            id: 'IOLF-3',
            title: 'Central Logging',
            mvp: true,
            cite: 'iol_logging',
            desc: 'The IOL shall log copies of all messages traveling through the exchange for auditing and reporting purposes, with tamper-evident storage.'
          },
          {
            id: 'IOLF-17',
            title: 'Audit Repository Integration',
            mvp: true,
            cite: 'cc_cert_integration',
            desc: 'The IOL shall integrate with the nationally provided Audit Repository, forwarding all transaction logs in the required format without building a duplicate audit infrastructure.'
          }
        ]
      },
      {
        id: 'nhdx-security',
        label: 'Security & Authentication',
        mvp: true,
        requirements: [
          {
            id: 'IOLF-13',
            title: 'Authentication & Authorisation',
            mvp: true,
            cite: 'idp_definition',
            desc: 'The IOL shall enforce authentication and authorisation for all incoming requests using the centralised Identity Provider (OAuth2/OIDC), rejecting unauthenticated or unauthorised calls.'
          },
          {
            id: 'IOLF-14',
            title: 'TLS Encryption in Transit',
            mvp: true,
            cite: null,
            desc: 'The IOL shall enforce TLS 1.2 or higher for all communication channels, both inbound from clients and outbound to downstream services.'
          },
          {
            id: 'IOLF-15',
            title: 'API Rate Limiting & Throttling',
            mvp: true,
            cite: null,
            desc: 'The IOL shall implement per-client API rate limiting and throttling to prevent abuse and ensure equitable resource access across all connected systems.'
          }
        ]
      },
      {
        id: 'nhdx-transformation',
        label: 'Message Transformation',
        mvp: true,
        requirements: [
          {
            id: 'IOLF-5',
            title: 'Message Transformation / Adapters',
            mvp: true,
            cite: 'iol_transformation',
            desc: 'The IOL shall support adapters to transform messages between the IOL internal FHIR format and the format expected by legacy service providers that cannot communicate natively in FHIR.'
          },
          {
            id: 'IOLF-6',
            title: 'Orchestration & Multi-Service Routing',
            mvp: true,
            cite: 'iol_orchestration',
            desc: 'The IOL shall route messages to external Point-of-Service systems and orchestrate complex transactions that interact with multiple services, compiling appropriate composite responses.'
          },
          {
            id: 'IOLF-7',
            title: 'Terminology Mapping',
            mvp: true,
            cite: 'ts_concept_maps',
            desc: 'The IOL shall apply terminology concept mappings (sourced from Terminology Services) to translate between local facility codes and national standard codes during message processing.'
          },
          {
            id: 'IOLF-8',
            title: 'Payload Validation',
            mvp: true,
            cite: null,
            desc: 'The IOL shall validate message payloads against defined FHIR profiles and schema rules, returning structured error responses for invalid or non-conformant submissions.'
          }
        ]
      },
      {
        id: 'nhdx-errors',
        label: 'Error Management',
        mvp: false,
        requirements: [
          {
            id: 'IOLF-4',
            title: 'Dead Letter Queue',
            mvp: false,
            cite: null,
            desc: 'The IOL shall maintain a dead letter queue for messages that cannot be delivered or processed, with configurable retry policies and alerting on queue growth.'
          },
          {
            id: 'IOLF-9',
            title: 'Error Console',
            mvp: true,
            cite: 'iol_error',
            desc: 'The IOL shall provide a mechanism (e.g. a console) for viewing failed transactions and managing errors, including resubmission of corrected messages by authorised administrators.'
          },
          {
            id: 'IOLF-10',
            title: 'Alerting & Notifications',
            mvp: false,
            cite: null,
            desc: 'The IOL shall send automated alerts to system administrators when error rates exceed defined thresholds or when critical transaction failures occur.'
          },
          {
            id: 'IOLF-11',
            title: 'Error Analytics Dashboard',
            mvp: false,
            cite: null,
            desc: 'The IOL shall provide an analytics dashboard showing error rates, failure patterns, and resolution times to support ongoing operational monitoring.'
          }
        ]
      },
      {
        id: 'nhdx-monitoring',
        label: 'Monitoring & Analytics',
        mvp: false,
        requirements: [
          {
            id: 'IOLF-12',
            title: 'Transaction Volume Analytics',
            mvp: false,
            cite: 'cc_apm',
            desc: 'The IOL shall provide transaction volume analytics and throughput metrics, integrating with the centrally provided APM platform rather than implementing a standalone monitoring solution.'
          },
          {
            id: 'IOLF-16',
            title: 'Connectathon & Integration Sandbox',
            mvp: false,
            cite: 'nhdx_connectathon',
            desc: 'The IOL shall provide sandbox and production environments supporting Connectathon execution, with technical documentation enabling legacy HIS vendors (HHIMS, HIMS, OpenMRS, Swastha, CloudHIMS) to integrate.'
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // IDP — Identity Provider (28 FRs)
  // ─────────────────────────────────────────────────────────────────────────
  IDP: {
    label: 'Identity Provider (IdP)',
    color: 'violet',
    areas: [
      {
        id: 'idp-authn',
        label: 'Core Authentication',
        mvp: true,
        requirements: [
          {
            id: 'FR-01',
            title: 'Multi-Factor Authentication (MFA)',
            mvp: true,
            cite: 'idp_mfa',
            desc: 'The system shall support MFA including 2FA, configurable by system criticality. Supported factors: OTP via authenticator apps, email, SMS, push notifications, and WebAuthn/FIDO2.'
          },
          {
            id: 'FR-02',
            title: 'OAuth2 / OpenID Connect',
            mvp: true,
            cite: 'idp_definition',
            desc: 'The system shall implement OAuth 2.0 and OpenID Connect protocols for all authentication and authorisation flows, enabling token-based access for all DHP components.'
          }
        ]
      },
      {
        id: 'idp-sso',
        label: 'Single Sign-On',
        mvp: true,
        requirements: [
          {
            id: 'FR-03',
            title: 'Single Sign-On (SSO)',
            mvp: true,
            cite: 'idp_sso',
            desc: 'The system shall provide SSO across the DHP ecosystem, allowing users to authenticate once and access multiple integrated applications without re-authentication, with single sign-out support.'
          }
        ]
      },
      {
        id: 'idp-users',
        label: 'User & Role Management',
        mvp: true,
        requirements: [
          {
            id: 'FR-05',
            title: 'User Lifecycle Management',
            mvp: true,
            cite: null,
            desc: 'The system shall support full user lifecycle management including creation, update, suspension, reactivation, and deactivation of user accounts with approval workflows.'
          },
          {
            id: 'FR-16',
            title: 'Role & Permission Assignment',
            mvp: true,
            cite: 'idp_rbac',
            desc: 'The system shall support assignment of roles and permissions to users and groups, with inheritance and delegation, enabling fine-grained access control across DHP components.'
          },
          {
            id: 'FR-20',
            title: 'Admin Console',
            mvp: true,
            cite: null,
            desc: 'The system shall provide an administrative console for managing users, roles, realms, authentication flows, and client configurations without requiring code changes.'
          }
        ]
      },
      {
        id: 'idp-realms',
        label: 'Multi-Realm Management',
        mvp: true,
        requirements: [
          {
            id: 'FR-04',
            title: 'Realms / Tenant Isolation',
            mvp: true,
            cite: 'idp_realms',
            desc: 'The system shall manage multiple realms to isolate user groups (national vs hospital-specific realms, per program/region/tenant), each with independent configurations for users, roles, and auth flows.'
          }
        ]
      },
      {
        id: 'idp-authz',
        label: 'Authorization & ABAC',
        mvp: true,
        requirements: [
          {
            id: 'FR-10',
            title: 'Attribute-Based Access Control (ABAC)',
            mvp: true,
            cite: 'idp_rbac',
            desc: 'The system shall enforce fine-grained ABAC policies and policy enforcement points, restricting access based on user roles, criticality, and context (e.g., location, time, device).'
          },
          {
            id: 'FR-22',
            title: 'Consent-Aware Authorisation',
            mvp: true,
            cite: 'nehr_consent',
            desc: 'The system shall support consent-aware authorisation, evaluating access requests against documented patient consent directives when performing access decisions on NEHR records.'
          }
        ]
      },
      {
        id: 'idp-sessions',
        label: 'Session Management',
        mvp: true,
        requirements: [
          {
            id: 'FR-12',
            title: 'Session Lifecycle Management',
            mvp: true,
            cite: null,
            desc: 'The system shall manage session lifecycles including creation, refresh, timeout, and revocation, with configurable idle and absolute session durations per application and realm.'
          }
        ]
      },
      {
        id: 'idp-emergency',
        label: 'Emergency & Offline Access',
        mvp: true,
        requirements: [
          {
            id: 'FR-07',
            title: 'Offline / Disconnected Access',
            mvp: true,
            cite: 'idp_offline',
            desc: 'The system shall enable local authentication at hospitals when the national IdP is unreachable (internet outages), using synchronised local identity providers with automatic reconciliation on reconnection.'
          },
          {
            id: 'FR-17',
            title: 'Emergency Break-Glass Access',
            mvp: true,
            cite: 'idp_emergency',
            desc: 'The system shall provide break-glass emergency access workflows with justification prompts, enhanced auditing, and notifications, aligned with HIPAA emergency access requirements.'
          }
        ]
      },
      {
        id: 'idp-audit',
        label: 'Audit & Compliance',
        mvp: true,
        requirements: [
          {
            id: 'FR-09',
            title: 'Comprehensive Audit Logging',
            mvp: true,
            cite: 'nehr_audit',
            desc: 'The system shall generate tamper-evident audit logs for all authentication events, authorisation decisions, admin actions, and session activities with full context metadata.'
          },
          {
            id: 'FR-25',
            title: 'Audit Log Export',
            mvp: true,
            cite: null,
            desc: 'The system shall support export of audit logs in structured formats for compliance reporting, integration with the national Audit Repository, and forensic investigation.'
          },
          {
            id: 'FR-28',
            title: 'PDPA Compliance',
            mvp: true,
            cite: 'pdpa',
            desc: 'The system shall ensure full compliance with Sri Lanka\'s Personal Data Protection Act (PDPA) for all personal identity data, including consent for data processing and right to erasure.'
          }
        ]
      },
      {
        id: 'idp-integration',
        label: 'Platform Integration',
        mvp: true,
        requirements: [
          {
            id: 'FR-08',
            title: 'Service-to-Service Trust',
            mvp: true,
            cite: 'idp_definition',
            desc: 'The system shall support service-to-service authentication using client credentials, certificate management, and mutual TLS, enabling trusted inter-component communication within the DHP.'
          },
          {
            id: 'FR-27',
            title: 'SMART-on-FHIR Support',
            mvp: true,
            cite: 'fhir_all',
            desc: 'The system shall support SMART-on-FHIR authorisation framework, enabling clinical applications to launch in context and obtain scoped FHIR access tokens on behalf of authenticated users.'
          }
        ]
      },
      {
        id: 'idp-federation',
        label: 'Federation & External Directories',
        mvp: false,
        requirements: [
          {
            id: 'FR-06',
            title: 'LDAP / Active Directory Integration',
            mvp: false,
            cite: null,
            desc: 'The system shall support integration with existing LDAP and Active Directory user directories in hospitals and MoH, enabling federated authentication without requiring user migration.'
          },
          {
            id: 'FR-21',
            title: 'Social / External IdP Federation',
            mvp: false,
            cite: 'idp_future',
            desc: 'The system shall support federation with external identity providers (e.g., national digital ID systems such as SLUDI) enabling persons to authenticate using national digital credentials.'
          },
          {
            id: 'FR-23',
            title: 'National ID Federation (SLUDI)',
            mvp: false,
            cite: 'idp_future',
            desc: 'The architecture shall enable future federation with the Sri Lanka Unique Digital Identity (SLUDI) system, allowing patients to authenticate using their national digital ID when policy permits.'
          }
        ]
      },
      {
        id: 'idp-advanced',
        label: 'Advanced Features',
        mvp: false,
        requirements: [
          {
            id: 'FR-11',
            title: 'Adaptive Authentication',
            mvp: false,
            cite: null,
            desc: 'The system shall support adaptive authentication that adjusts authentication requirements based on risk signals (unusual location, time, device, access pattern) without user intervention in low-risk scenarios.'
          },
          {
            id: 'FR-13',
            title: 'Patient Identity Verification',
            mvp: false,
            cite: null,
            desc: 'The system shall support patient identity verification workflows enabling patients to authenticate to the NEHR Patient Access Module using government-issued ID and biometric verification.'
          },
          {
            id: 'FR-14',
            title: 'Biometric Authentication',
            mvp: false,
            cite: null,
            desc: 'The system shall support biometric authentication (fingerprint, face recognition) as an additional authentication factor for high-security clinical workstations and patient access scenarios.'
          },
          {
            id: 'FR-15',
            title: 'Delegated Access',
            mvp: false,
            cite: null,
            desc: 'The system shall support delegated access allowing authorised representatives (e.g., guardians, caregivers) to access patient health records on behalf of the patient with defined scope and duration.'
          },
          {
            id: 'FR-18',
            title: 'Self-Service Password Reset',
            mvp: false,
            cite: null,
            desc: 'The system shall provide a self-service password reset workflow enabling healthcare workers to reset credentials without IT helpdesk intervention, using verified secondary contact methods.'
          },
          {
            id: 'FR-19',
            title: 'Onboarding Workflows',
            mvp: false,
            cite: null,
            desc: 'The system shall support structured onboarding workflows for new healthcare workers and facilities, including identity verification, role assignment approval, and account activation notifications.'
          },
          {
            id: 'FR-24',
            title: 'Certificate Management',
            mvp: false,
            cite: 'cc_cert_integration',
            desc: 'The system shall integrate with the nationally provided Certificate Services for digital certificate issuance, renewal, and revocation, without developing a standalone certificate authority.'
          },
          {
            id: 'FR-26',
            title: 'Token Introspection & Management',
            mvp: false,
            cite: null,
            desc: 'The system shall provide token introspection endpoints and a token management console enabling administrators to view, revoke, and audit active access tokens across all applications.'
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // TS — Terminology Services (18 FRs)
  // ─────────────────────────────────────────────────────────────────────────
  TS: {
    label: 'Terminology Services',
    color: 'teal',
    areas: [
      {
        id: 'ts-import',
        label: 'Code System Import / Export',
        mvp: true,
        requirements: [
          {
            id: 'TSF-1',
            title: 'Import Code Systems',
            mvp: true,
            cite: 'ts_import',
            desc: 'The TS must support import of both local (e.g., local lab codes) and standard code systems (e.g., LOINC, ICD-10/11, SNOMED subsets, ATC/DDD), including bulk and individual import of codes.'
          },
          {
            id: 'TSF-2',
            title: 'Export Code Systems',
            mvp: true,
            cite: null,
            desc: 'The TS must support export of code systems and value sets in standard FHIR formats (JSON, XML) and flat file formats (CSV) to enable offline use and distribution to connected systems.'
          }
        ]
      },
      {
        id: 'ts-versioning',
        label: 'Versioning',
        mvp: true,
        requirements: [
          {
            id: 'TSF-3',
            title: 'Code System Versioning',
            mvp: true,
            cite: 'ts_versioning',
            desc: 'The TS should support multiple versions of a code system accessible through the service, enabling connected systems to pin to a specific version for clinical consistency.'
          },
          {
            id: 'TSF-4',
            title: 'Version History & Diff',
            mvp: true,
            cite: null,
            desc: 'The TS shall maintain full version history for all code systems and provide diff capabilities to identify changes between versions, supporting governance review and impact assessment.'
          }
        ]
      },
      {
        id: 'ts-valuesets',
        label: 'Value Sets',
        mvp: true,
        requirements: [
          {
            id: 'TSF-5',
            title: 'Value Set Definition',
            mvp: true,
            cite: null,
            desc: 'The TS must support definition and management of value sets as curated subsets of code system codes, with human-readable descriptions and governance metadata.'
          },
          {
            id: 'TSF-6',
            title: 'Value Set Expansion',
            mvp: true,
            cite: null,
            desc: 'The TS shall support FHIR ValueSet $expand operation, returning all codes in a value set at a given version, with support for hierarchical expansion from parent codes.'
          },
          {
            id: 'TSF-7',
            title: 'Code Membership Check',
            mvp: true,
            cite: null,
            desc: 'The TS shall support FHIR ValueSet $validate-code operation, enabling connected systems to verify whether a given code is a valid member of a specified value set.'
          },
          {
            id: 'TSF-8',
            title: 'Value Set Versioning',
            mvp: true,
            cite: 'ts_versioning',
            desc: 'The TS shall support versioned value sets with publication lifecycle (draft → active → retired), enabling controlled rollout of value set changes without breaking existing clinical workflows.'
          }
        ]
      },
      {
        id: 'ts-query',
        label: 'Query APIs',
        mvp: true,
        requirements: [
          {
            id: 'TSF-11',
            title: 'Code Lookup API',
            mvp: true,
            cite: null,
            desc: 'The TS shall provide FHIR CodeSystem $lookup operation, returning full metadata for a given code including display name, definition, parent codes, and multilingual designations.'
          },
          {
            id: 'TSF-12',
            title: 'Code Validation API',
            mvp: true,
            cite: null,
            desc: 'The TS shall provide FHIR CodeSystem $validate-code operation, enabling real-time validation of clinical codes submitted by NEHR and NHDX against active code systems.'
          }
        ]
      },
      {
        id: 'ts-conceptmaps',
        label: 'Concept Maps & Cross-Mapping',
        mvp: false,
        requirements: [
          {
            id: 'TSF-9',
            title: 'Import Concept Maps',
            mvp: false,
            cite: 'ts_concept_maps',
            desc: 'The TS must support importing relationships (maps) between codes across different code systems (e.g., mapping between a local SR code and ATC/DDD), including bulk import of mapping tables.'
          },
          {
            id: 'TSF-10',
            title: 'Concept Map Management',
            mvp: false,
            cite: null,
            desc: 'The TS shall support authoring, versioning, and publishing of concept maps with governance workflows, enabling controlled updates to inter-system code mappings.'
          },
          {
            id: 'TSF-13',
            title: 'Code Translation API',
            mvp: false,
            cite: null,
            desc: 'The TS shall provide FHIR ConceptMap $translate operation, enabling the NHDX to translate codes from source to target code systems during message transformation. Requires concept maps (TSF-9) to be imported.'
          }
        ]
      },
      {
        id: 'ts-workflow',
        label: 'Code Management & Workflow',
        mvp: false,
        requirements: [
          {
            id: 'TSF-15',
            title: 'Code System Management',
            mvp: false,
            cite: 'ts_workflow',
            desc: 'The TS should support code system management: additions, updates, and deprecation of codes with approval workflows, automated publishing and version control of code systems and value sets.'
          },
          {
            id: 'TSF-16',
            title: 'Terminology Synchronisation',
            mvp: false,
            cite: 'ts_sync',
            desc: 'The TS should support synchronisation with upstream terminology servers (e.g., reference LOINC TS, SNOMED International) to receive automated updates to imported standard code systems.'
          }
        ]
      },
      {
        id: 'ts-multilingual',
        label: 'Multilingual & Translation',
        mvp: false,
        requirements: [
          {
            id: 'TSF-14',
            title: 'Sinhala & Tamil Translations',
            mvp: false,
            cite: 'ts_translation_fn',
            desc: 'The TS shall support translation and transliterations of code systems, value sets, and codes into Sinhala and Tamil, required especially for public-facing data and patient-visible clinical terms.'
          }
        ]
      },
      {
        id: 'ts-analytics',
        label: 'Analytics & Monitoring',
        mvp: false,
        requirements: [
          {
            id: 'TSF-17',
            title: 'Usage Analytics',
            mvp: false,
            cite: 'cc_apm',
            desc: 'The TS shall provide analytics on terminology usage patterns (most queried codes, value sets, error rates) integrating with the centrally provided APM platform for system monitoring.'
          },
          {
            id: 'TSF-18',
            title: 'Terminology Coverage Reporting',
            mvp: false,
            cite: null,
            desc: 'The TS shall provide reports on terminology coverage across DHP components, identifying unmapped or invalid codes submitted by connected systems to guide curation priorities.'
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ER — e-Referral System with Appointment Management (38 FRs)
  // ─────────────────────────────────────────────────────────────────────────
  ER: {
    label: 'e-Referral & Appointment Management',
    color: 'emerald',
    areas: [
      {
        id: 'er-registry',
        label: 'Registry Integration',
        mvp: true,
        requirements: [
          {
            id: 'RAM-001',
            title: 'Client / Provider / Facility Registry Integration',
            mvp: true,
            cite: 'er_registry',
            desc: 'The system shall integrate with the Client Registry, Provider Registry, and Facility Registry to validate patients, providers, organisations, locations, and services in real time during referral creation.'
          }
        ]
      },
      {
        id: 'er-config',
        label: 'Referral Config & Permissions',
        mvp: true,
        requirements: [
          {
            id: 'RAM-003',
            title: 'Referral Type Configuration',
            mvp: true,
            cite: null,
            desc: 'The system shall support configuration of referral types (e.g., specialist, diagnostic, preventive, back-referral) with per-type workflows, required fields, and triage rules.'
          },
          {
            id: 'RAM-004',
            title: 'Provider Permissions for Referral',
            mvp: true,
            cite: null,
            desc: 'The system shall enforce permission rules determining which providers and facilities can create, accept, and action referrals for each referral type and service category.'
          }
        ]
      },
      {
        id: 'er-creation',
        label: 'Referral Creation & Lifecycle',
        mvp: true,
        requirements: [
          {
            id: 'RAM-005',
            title: 'Electronic Referral Creation',
            mvp: true,
            cite: 'er_creation',
            desc: 'The system shall support creation of structured electronic referrals including reason for referral, urgency level, clinical context, and relevant NEHR-linked clinical data.'
          },
          {
            id: 'RAM-007',
            title: 'Referral Status Tracking',
            mvp: true,
            cite: 'er_status',
            desc: 'The system shall track referral status across the full lifecycle: created → accepted → scheduled → completed → cancelled → expired, with timestamps and responsible user at each transition.'
          },
          {
            id: 'RAM-008',
            title: 'Back-Referral Support',
            mvp: true,
            cite: null,
            desc: 'The system shall support back-referral from receiving facility to the originating facility, enabling structured communication of findings, recommendations, and follow-up actions.'
          }
        ]
      },
      {
        id: 'er-appointments',
        label: 'Appointment Scheduling',
        mvp: true,
        requirements: [
          {
            id: 'RAM-012',
            title: 'Appointment Booking',
            mvp: true,
            cite: null,
            desc: 'The system shall support booking of appointments against defined sessions, with slot availability displayed to the referring provider and booking confirmation sent to all parties.'
          },
          {
            id: 'RAM-013',
            title: 'Session Management',
            mvp: true,
            cite: 'er_session',
            desc: 'The system shall support defining clinic sessions (daily, weekly, bi-weekly, monthly, or ad-hoc) for services, with configurable capacity, booking cut-off, and triage priority rules.'
          },
          {
            id: 'RAM-014',
            title: 'Appointment Rescheduling',
            mvp: true,
            cite: null,
            desc: 'The system shall support rescheduling of booked appointments by authorised users, with notifications to the patient and referring provider of the new appointment details.'
          },
          {
            id: 'RAM-016',
            title: 'Booking Cut-Off Enforcement',
            mvp: true,
            cite: null,
            desc: 'The system shall enforce booking cut-off rules per session, preventing new bookings after the configured deadline and displaying available session alternatives to referring providers.'
          }
        ]
      },
      {
        id: 'er-quotas',
        label: 'Quotas & Capacity',
        mvp: true,
        requirements: [
          {
            id: 'RAM-006',
            title: 'Session Capacity Definition',
            mvp: true,
            cite: null,
            desc: 'The system shall support definition of total session capacity (number of appointment slots) per session, with separate capacity pools for different urgency levels and referral types.'
          },
          {
            id: 'RAM-015',
            title: 'Queue Management',
            mvp: true,
            cite: null,
            desc: 'The system shall support management of referral queues at receiving facilities, including prioritisation rules, triage scoring, and waiting time visibility to referring providers.'
          },
          {
            id: 'RAM-017',
            title: 'Quota Allocation per Referring Unit',
            mvp: true,
            cite: 'er_quota',
            desc: 'The system shall allow allocation of appointment quotas within a session based on the referring unit or institution, ensuring equitable access across referring providers.'
          }
        ]
      },
      {
        id: 'er-notifications',
        label: 'Notifications & Reminders',
        mvp: true,
        requirements: [
          {
            id: 'RAM-009',
            title: 'Referral Notifications',
            mvp: true,
            cite: null,
            desc: 'The system shall send automated notifications to receiving providers when new referrals are created, and to referring providers when referrals are accepted, declined, or actioned.'
          },
          {
            id: 'RAM-028',
            title: 'Patient Notifications & Reminders',
            mvp: true,
            cite: 'er_notifications',
            desc: 'The system shall send automated notifications to patients (SMS, email, app) for appointment bookings, reminders prior to scheduled date, changes, and cancellations.'
          }
        ]
      },
      {
        id: 'er-governance',
        label: 'Governance & Access Control',
        mvp: true,
        requirements: [
          {
            id: 'RAM-034',
            title: 'Role-Based Access',
            mvp: true,
            cite: 'idp_rbac',
            desc: 'The system shall enforce role-based access control restricting referral creation, acceptance, scheduling, and reporting capabilities to authorised provider roles defined in the Identity Provider.'
          },
          {
            id: 'RAM-035',
            title: 'Audit Trail',
            mvp: true,
            cite: 'nehr_audit',
            desc: 'The system shall maintain a full audit trail for all referral and appointment actions including creation, status changes, modifications, cancellations, and notification events.'
          },
          {
            id: 'RAM-036',
            title: 'Data Retention Policy',
            mvp: true,
            cite: 'pdpa',
            desc: 'The system shall implement configurable data retention policies for referral records, compliant with Sri Lanka PDPA requirements and MoH clinical records retention guidelines.'
          },
          {
            id: 'RAM-037',
            title: 'NEHR Integration',
            mvp: true,
            cite: 'nehr_definition',
            desc: 'The system shall integrate with the NEHR to attach relevant clinical context to referrals and write back referral outcomes and appointment records to the patient\'s longitudinal health record.'
          },
          {
            id: 'RAM-038',
            title: 'High Availability Architecture',
            mvp: true,
            cite: 'er_availability',
            desc: 'The system shall be designed for 99.999% availability, deployed in a high-availability configuration on the MoH Tier III datacenter infrastructure without single points of failure.'
          },
          {
            id: 'RAM-039',
            title: 'NHDX Integration',
            mvp: true,
            cite: 'nhdx_definition',
            desc: 'The system shall route all inter-facility referral data and appointment messages through the NHDX, using FHIR-based APIs and adhering to the IOL message standards.'
          }
        ]
      },
      {
        id: 'er-sessions',
        label: 'Session & Working Day Management',
        mvp: false,
        requirements: [
          {
            id: 'RAM-018',
            title: 'Working Day Calendar',
            mvp: false,
            cite: null,
            desc: 'The system shall support configuration of working day calendars per facility and service, including public holidays, special closures, and ad-hoc modifications to session availability.'
          },
          {
            id: 'RAM-019',
            title: 'Recurring Session Templates',
            mvp: false,
            cite: null,
            desc: 'The system shall support recurring session templates enabling facilities to define weekly or monthly schedules once and have sessions auto-generated for future periods.'
          },
          {
            id: 'RAM-020',
            title: 'Multi-Clinician Sessions',
            mvp: false,
            cite: null,
            desc: 'The system shall support sessions with multiple clinicians providing the same service simultaneously, with per-clinician slot allocation and capacity pooling options.'
          },
          {
            id: 'RAM-021',
            title: 'Disruption Management',
            mvp: false,
            cite: 'er_disruption',
            desc: 'The system shall support suspension or modification of sessions due to trade union actions, emergencies, or administrative directives, with bulk notification to affected patients.'
          },
          {
            id: 'RAM-022',
            title: 'Telehealth Session Support',
            mvp: false,
            cite: 'ereferral_definition',
            desc: 'The system shall support configuration of telehealth consultation sessions as an appointment type, with video link generation and patient notification of virtual appointment details.'
          }
        ]
      },
      {
        id: 'er-bulk',
        label: 'Bulk Ops & Advanced Patient Interaction',
        mvp: false,
        requirements: [
          {
            id: 'RAM-023',
            title: 'Bulk Appointment Cancellation',
            mvp: false,
            cite: null,
            desc: 'The system shall support bulk cancellation of all appointments within a session or date range, with automated patient notifications and re-booking guidance.'
          },
          {
            id: 'RAM-024',
            title: 'Waitlist Management',
            mvp: false,
            cite: null,
            desc: 'The system shall support waitlisting of patients when sessions are fully booked, with automated notification and booking when a slot becomes available.'
          },
          {
            id: 'RAM-025',
            title: 'Patient Self-Service Booking',
            mvp: false,
            cite: 'ereferral_definition',
            desc: 'The system shall support patient self-service appointment booking via the NEHR Patient Access Module, subject to referral authorisation and slot availability rules.'
          },
          {
            id: 'RAM-026',
            title: 'Referral Expiry Management',
            mvp: false,
            cite: null,
            desc: 'The system shall automatically expire referrals that are not acted upon within a configurable period, with notifications to referring and receiving providers and tracking in the audit trail.'
          },
          {
            id: 'RAM-027',
            title: 'Referral Escalation',
            mvp: false,
            cite: null,
            desc: 'The system shall support escalation of referrals that have not been accepted or scheduled within defined time thresholds, routing them to supervisory roles for intervention.'
          },
          {
            id: 'RAM-029',
            title: 'DNW (Did Not Wait) / DNA Tracking',
            mvp: false,
            cite: null,
            desc: 'The system shall track Did Not Wait and Did Not Attend outcomes for appointments, feeding into queue management and referral pattern analytics.'
          }
        ]
      },
      {
        id: 'er-analytics',
        label: 'Analytics & Reporting',
        mvp: false,
        requirements: [
          {
            id: 'RAM-010',
            title: 'Referral Volume Reports',
            mvp: false,
            cite: 'er_analytics',
            desc: 'The system shall generate reports on referral volumes by facility, service, provider, and time period, enabling performance monitoring and capacity planning.'
          },
          {
            id: 'RAM-011',
            title: 'Appointment Lead Time Reports',
            mvp: false,
            cite: null,
            desc: 'The system shall report on appointment lead times (time from referral creation to scheduled appointment) by service type and facility, surfacing access bottlenecks.'
          },
          {
            id: 'RAM-030',
            title: 'Referral & Appointment Analytics',
            mvp: false,
            cite: 'er_analytics',
            desc: 'The system shall provide analytics on referral volumes, appointment lead times, completion rates, DNA rates, and service utilisation for operational and strategic reporting.'
          },
          {
            id: 'RAM-031',
            title: 'Service Utilisation Dashboard',
            mvp: false,
            cite: null,
            desc: 'The system shall provide a configurable dashboard showing real-time and historical service utilisation rates per facility and specialty, supporting capacity planning decisions.'
          },
          {
            id: 'RAM-032',
            title: 'Custom Report Builder',
            mvp: false,
            cite: null,
            desc: 'The system shall provide a user-configurable report builder enabling administrators to define custom report queries across referral and appointment data with export capability.'
          },
          {
            id: 'RAM-033',
            title: 'Data Export',
            mvp: false,
            cite: null,
            desc: 'The system shall support export of referral and appointment data in CSV and JSON formats for external analysis, MoH reporting, and integration with national health analytics platforms.'
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PAM — Patient/Clinician Access Module (35 FRs)
  // ─────────────────────────────────────────────────────────────────────────
  PAM: {
    label: 'Patient/Clinician Access Module',
    color: 'rose',
    areas: [
      {
        id: 'pam-access',
        label: 'User Access & Channels',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.01',
            title: 'Responsive Web Application',
            mvp: true,
            cite: 'nehr_patient_access',
            desc: 'Patient-facing web application accessible on mobile, tablet, and desktop browsers, designed for usability, accessibility, and multilingual support.'
          },
          {
            id: 'PAM.FN.02',
            title: 'Patient View for NEHR Data',
            mvp: true,
            cite: 'nehr_patient_access',
            desc: 'Patient access view should be developed for the NEHR data.'
          }
        ]
      },
      {
        id: 'pam-auth',
        label: 'Authentication & Identity',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.03',
            title: 'IDP-based Authentication',
            mvp: true,
            cite: null,
            desc: 'Authentication using the national Identity Provider (SLUDI), initially via sandbox and subsequently migrated to production.'
          },
          {
            id: 'PAM.FN.04',
            title: 'Self-Registration',
            mvp: true,
            cite: null,
            desc: 'Support self-registration workflows aligned with national identity policies and identity proofing mechanisms.'
          }
        ]
      },
      {
        id: 'pam-demographics',
        label: 'Demographics & Profile',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.05',
            title: 'Patient Profile Management',
            mvp: true,
            cite: null,
            desc: 'Capture and manage demographic and socio-economic attributes such as education, employment, income status, and related metadata.'
          },
          {
            id: 'PAM.FN.06',
            title: 'Patient Origin Data',
            mvp: false,
            cite: null,
            desc: 'Capture and manage patient origin and contextual data for analytics and service planning.'
          }
        ]
      },
      {
        id: 'pam-phn',
        label: 'PHN Management',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.07',
            title: 'PHN Generation',
            mvp: true,
            cite: null,
            desc: 'Generate Personal Health Numbers (PHN) through interaction with the Client Registry.'
          },
          {
            id: 'PAM.FN.08',
            title: 'PHN Claim Process',
            mvp: true,
            cite: null,
            desc: 'Allow patients to claim existing PHNs issued through other systems.'
          },
          {
            id: 'PAM.FN.09',
            title: 'Multiple PHN Handling',
            mvp: false,
            cite: null,
            desc: 'Detect, manage, and reconcile multiple PHNs where applicable, in accordance with national policy.'
          }
        ]
      },
      {
        id: 'pam-dashboard',
        label: 'Dashboard & Visualization',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.10',
            title: 'Patient Dashboard',
            mvp: true,
            cite: null,
            desc: 'Provide a dashboard summarizing the current health status of the patient.'
          },
          {
            id: 'PAM.FN.11',
            title: 'Salient Clinical Indicators',
            mvp: true,
            cite: null,
            desc: 'Display allergies/intolerances, current medications, active health problems, pending referrals, and upcoming appointments at a glance.'
          }
        ]
      },
      {
        id: 'pam-records',
        label: 'Health Record Viewing',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.12',
            title: 'Timeline View',
            mvp: true,
            cite: null,
            desc: 'Present patient records in a chronological timeline view across encounters and facilities.'
          },
          {
            id: 'PAM.FN.13',
            title: 'Record Drill-down',
            mvp: true,
            cite: null,
            desc: 'Allow users to drill into individual summary records for detailed review.'
          },
          {
            id: 'PAM.FN.14',
            title: 'Record Filtering',
            mvp: true,
            cite: null,
            desc: 'Enable filtering of records by type, time period, facility, or episode of care.'
          }
        ]
      },
      {
        id: 'pam-dependents',
        label: 'Dependents & Guardianship',
        mvp: false,
        requirements: [
          {
            id: 'PAM.FN.15',
            title: 'Dependent Management',
            mvp: false,
            cite: null,
            desc: 'Support adding, editing, removing, and viewing dependent profiles (e.g., children, elderly).'
          },
          {
            id: 'PAM.FN.16',
            title: 'Guardianship Transfer',
            mvp: false,
            cite: null,
            desc: 'Enable transfer of guardianship and delegation of access rights in accordance with policy.'
          }
        ]
      },
      {
        id: 'pam-consent',
        label: 'Consent Management',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.17',
            title: 'Granular Consent Controls',
            mvp: true,
            cite: null,
            desc: 'Support consent at multiple levels including per-request, facility, provider, episode of care, and PHN.'
          },
          {
            id: 'PAM.FN.18',
            title: 'Consent Approval Workflow',
            mvp: true,
            cite: null,
            desc: 'Allow explicit approval of individual data-sharing requests when consent is per-request.'
          },
          {
            id: 'PAM.FN.19',
            title: 'Consent Configuration',
            mvp: false,
            cite: null,
            desc: 'Enable configurable consent defaults and policies through administrative controls.'
          }
        ]
      },
      {
        id: 'pam-curated',
        label: 'Patient-Curated Data',
        mvp: false,
        requirements: [
          {
            id: 'PAM.FN.20',
            title: 'Health Diaries',
            mvp: false,
            cite: null,
            desc: 'Allow patients to maintain curated health data such as asthma diaries, blood pressure logs, and fitness records.'
          },
          {
            id: 'PAM.FN.21',
            title: 'Structured Questionnaires',
            mvp: false,
            cite: null,
            desc: 'Capture patient-entered data using HL7 FHIR Structured Questionnaires where feasible. Allow for Structured Questionnaire authoring support.'
          }
        ]
      },
      {
        id: 'pam-analytics',
        label: 'Analytics & Trends',
        mvp: false,
        requirements: [
          {
            id: 'PAM.FN.22',
            title: 'Trend Visualizations',
            mvp: false,
            cite: null,
            desc: 'Generate trend graphs (e.g., blood pressure, blood glucose) using NEHR data and patient-entered structured data.'
          },
          {
            id: 'PAM.FN.23',
            title: 'Advanced Visualizations',
            mvp: false,
            cite: null,
            desc: 'Support configurable and extensible visual analytics features subject to administrative enablement.'
          }
        ]
      },
      {
        id: 'pam-summaries',
        label: 'Clinical Summaries & Sharing',
        mvp: false,
        requirements: [
          {
            id: 'PAM.FN.24',
            title: 'International Patient Summary (IPS)',
            mvp: false,
            cite: null,
            desc: 'Generate patient summaries conforming to the International Patient Summary (IPS) specification.'
          },
          {
            id: 'PAM.FN.25',
            title: 'SMART Health Links',
            mvp: false,
            cite: null,
            desc: 'Enable secure sharing of patient summaries using FHIR SMART Health Links or equivalent mechanisms.'
          }
        ]
      },
      {
        id: 'pam-audit',
        label: 'Audit & Transparency',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.26',
            title: 'Access Logs',
            mvp: true,
            cite: null,
            desc: 'Allow patients to view logs of data access by facilities and healthcare providers.'
          },
          {
            id: 'PAM.FN.27',
            title: 'Activity History',
            mvp: true,
            cite: null,
            desc: 'Maintain visibility into consent changes and data-sharing activities.'
          }
        ]
      },
      {
        id: 'pam-admin',
        label: 'Administration & Configuration',
        mvp: false,
        requirements: [
          {
            id: 'PAM.FN.28',
            title: 'Feature Management',
            mvp: false,
            cite: null,
            desc: 'Admin interface to enable or disable application features such as consent granularity, IPS auto-generation, and visualizations.'
          },
          {
            id: 'PAM.FN.29',
            title: 'Policy Configuration',
            mvp: false,
            cite: null,
            desc: 'Configure consent models, summarization rules, and data visibility parameters centrally.'
          }
        ]
      },
      {
        id: 'pam-interop',
        label: 'Interoperability & Standards',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.30',
            title: 'Standards Compliance',
            mvp: true,
            cite: null,
            desc: 'All data access and exchange shall comply with national eHealth standards and international interoperability standards (HL7 FHIR, IPS).'
          },
          {
            id: 'PAM.FN.31',
            title: 'Notifications',
            mvp: true,
            cite: null,
            desc: 'Allow for targeted health promotion, education material. Reminder on appointments, referrals, etc.'
          }
        ]
      },
      {
        id: 'pam-clinician',
        label: 'Clinician View',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.32',
            title: 'Clinician View for NEHR Data',
            mvp: true,
            cite: null,
            desc: 'An EMR embeddable view should be developed and be shared for authorized applications. The content of the NEHR view would be similar to the patient view with additional authorisation and privacy controls.'
          },
          {
            id: 'PAM.FN.33',
            title: 'Advanced Clinician Visualizations',
            mvp: false,
            cite: null,
            desc: 'Support advanced visualizations using data available in the NEHR: e.g., superimposing medications on blood pressure trend graph.'
          }
        ]
      },
      {
        id: 'pam-management',
        label: 'Management',
        mvp: false,
        requirements: [
          {
            id: 'PAM.FN.34',
            title: 'Analytics and Dashboards',
            mvp: false,
            cite: null,
            desc: 'Should provide useful analytics and dashboarding to support the management of the module functionality. APIs to access analytics and dashboards from external monitoring systems should be provided.'
          }
        ]
      },
      {
        id: 'pam-docs',
        label: 'Documentation',
        mvp: true,
        requirements: [
          {
            id: 'PAM.FN.35',
            title: 'Documentation',
            mvp: true,
            cite: null,
            desc: 'Comprehensive documentation SHALL be provided, including architecture, configuration, terminology lifecycle management, API usage, operational procedures, and troubleshooting guides.'
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CC — Common Requirements (15 cross-cutting integration requirements)
  // ─────────────────────────────────────────────────────────────────────────
  CC: {
    label: 'Common Requirements',
    color: 'slate',
    areas: [
      {
        id: 'cc-security',
        label: 'Certificate & Security Services',
        mvp: true,
        requirements: [
          {
            id: 'CC.INT.01',
            title: 'Integration with Certificate Services',
            mvp: true,
            cite: 'cc_cert_integration',
            desc: 'The solution SHALL integrate with the nationally provided Certificate Services for digital certificate issuance, renewal, revocation, and trust validation. The solution SHALL NOT develop or embed its own certificate authority or certificate management capability.'
          },
          {
            id: 'CC.INT.02',
            title: 'Secure Communications via Certificate Services',
            mvp: true,
            cite: null,
            desc: 'The solution SHALL use the national Certificate Services to enable secure communication (e.g., mutual TLS) between NEHR, NHDX, eReferral, Appointment Management, and other authorised systems.'
          },
          {
            id: 'CC.INT.04',
            title: 'Security Event & Incident Management Integration',
            mvp: true,
            cite: null,
            desc: 'The solution SHALL integrate with the national Security Event and Incident Management platform to publish security logs, alerts, and incidents. Local security monitoring SHALL be limited to forwarding events to the central platform.'
          }
        ]
      },
      {
        id: 'cc-monitoring',
        label: 'Monitoring & Audit',
        mvp: true,
        requirements: [
          {
            id: 'CC.INT.03',
            title: 'Application Performance Monitoring Integration',
            mvp: true,
            cite: 'cc_apm',
            desc: 'The solution SHALL integrate with the centrally provided Application Performance Monitoring (APM) platform for performance, availability, and resource utilisation monitoring. The solution SHALL NOT implement a separate APM solution.'
          },
          {
            id: 'CC.INT.05',
            title: 'Central Audit Repository Integration',
            mvp: true,
            cite: null,
            desc: 'The solution SHALL generate audit logs and transmit them to the centrally managed Audit Repository using approved interfaces. The solution SHALL NOT implement its own long-term audit log storage.'
          },
          {
            id: 'CC.INT.06',
            title: 'Audit Log Standardisation',
            mvp: true,
            cite: null,
            desc: 'Audit events generated by the solution SHALL conform to the national audit log structure, taxonomy, and timestamping requirements.'
          },
          {
            id: 'CC.INT.07',
            title: 'Time Keeping Service Integration',
            mvp: true,
            cite: null,
            desc: 'The solution SHALL integrate with the national Time Keeping Service to ensure consistent timestamping of transactions, audit events, and clinical records. Local system clocks SHALL be synchronised with the authoritative time source.'
          }
        ]
      },
      {
        id: 'cc-data',
        label: 'Data & Analytics Integration',
        mvp: false,
        requirements: [
          {
            id: 'CC.INT.08',
            title: 'ETL Framework Integration',
            mvp: false,
            cite: null,
            desc: 'The solution SHALL expose approved interfaces and data extracts to the centrally managed ETL framework. The solution SHALL NOT develop independent ETL pipelines for secondary use.'
          },
          {
            id: 'CC.INT.09',
            title: 'Secondary Use Data Provisioning',
            mvp: false,
            cite: null,
            desc: 'The solution SHALL support data provisioning to the Digital Health Information Warehouse (DHIW/HMIS) exclusively via the national ETL framework and approved data models.'
          },
          {
            id: 'CC.INT.10',
            title: 'Separation of Operational and Analytical Workloads',
            mvp: false,
            cite: null,
            desc: 'The solution SHALL ensure that operational systems (NEHR, NHDX, eReferral, Appointment) are not used directly for analytical queries and SHALL rely on the DHIW for secondary-use analytics.'
          }
        ]
      },
      {
        id: 'cc-privacy',
        label: 'Privacy & Governance',
        mvp: true,
        requirements: [
          {
            id: 'CC.INT.11',
            title: 'Privacy & De-Identification Alignment',
            mvp: true,
            cite: null,
            desc: 'The solution SHALL comply with national de-identification and pseudonymisation policies when providing data for secondary use and SHALL rely on centrally provided mechanisms where applicable.'
          },
          {
            id: 'CC.INT.12',
            title: 'Access Governance for Secondary Use',
            mvp: false,
            cite: null,
            desc: 'The solution SHALL enforce access decisions issued by national governance processes for secondary-use data and SHALL log all data disclosures via the central audit service.'
          }
        ]
      },
      {
        id: 'cc-compliance',
        label: 'Compliance & Coordination',
        mvp: true,
        requirements: [
          {
            id: 'CC.INT.13',
            title: 'No Duplication of Common Services',
            mvp: true,
            cite: 'cc_no_duplication',
            desc: 'The solution SHALL NOT design, develop, procure, or operate duplicate implementations of certificate management, audit repositories, ETL pipelines, time services, or APM platforms.'
          },
          {
            id: 'CC.INT.14',
            title: 'Standards-Based Integration',
            mvp: true,
            cite: null,
            desc: 'All integrations with common services SHALL use nationally approved standards, APIs, and security mechanisms as published by the platform owners.'
          },
          {
            id: 'CC.INT.15',
            title: 'Change & Dependency Coordination',
            mvp: true,
            cite: null,
            desc: 'The solution SHALL coordinate changes, upgrades, and dependency management with the owners of the common services to avoid service disruption.'
          }
        ]
      }
    ]
  }

};
