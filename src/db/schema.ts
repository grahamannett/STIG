/*
Copyright 2018 Southern California Edison Company

ALL RIGHTS RESERVED
*/

import { PropertyCreateConfig } from "orientjs";

export interface IOrientJSONClassOptions {
    name: string;
    superClasses: string[];
    properties: PropertyCreateConfig[];
}

export interface ISchemaFile {
    classes: IOrientJSONClassOptions[];
}

export const schema: ISchemaFile = {
    classes: [
        {
            name: "core",
            superClasses: ["V"],
            properties: [
                { name: "id_", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "type", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "created", type: "DateTime", mandatory: true, notNull: true, collate: "default" },
                { name: "modified", type: "DateTime", mandatory: true, notNull: true, collate: "default" },
                { name: "created_by_ref", type: "String", collate: "default" },
                { name: "confidence", type: "Integer", collate: "default" },
                { name: "object_marking_refs", type: "EmbeddedList", collate: "default" },
                { name: "labels", type: "EmbeddedList", collate: "default" },
                { name: "lang", type: "String", collate: "default"},
                { name: "revoked", type: "Boolean", mandatory: true, notNull: true, collate: "default", default: "False" },
                { name: "external_references", type: "EmbeddedList", collate: "default" },
                { name: "granular_markings", type: "EmbeddedList", collate: "default" },
                { name: "extensions", type: "EmbeddedMap", collate: "default" },
            ],
        },
        {
            name: "relationship",
            superClasses: ["E"],
            properties: [
                { name: "id_", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "type", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "created", type: "DateTime", mandatory: true, notNull: true, collate: "default" },
                { name: "modified", type: "DateTime", mandatory: true, notNull: true, collate: "default" },
                { name: "created_by_ref", type: "String", collate: "default" },
                { name: "external_references", type: "EmbeddedList", collate: "default" },
                { name: "relationship_type", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "revoked", type: "Boolean", mandatory: true, notNull: true, collate: "default", default: "False" },
                { name: "source_ref", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "target_ref", type: "String", mandatory: true, notNull: true, collate: "default" },
            ],
        },
        {
            name: "analysis_of",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "artifact",
            superClasses: ["core"],
            properties: [
                { name: "mime_type", type: "String", collate: "default" },
                { name: "payload_bin", type: "Binary", collate: "default" },
                { name: "url", type: "String", collate: "default" },
                { name: "hashes", type: "EmbeddedMap", collate: "default" },
                { name: "encryption_algorithm", type: "String", collate: "default" },
                { name: "decryption_key", type: "String", collate: "default" },
            ],
        },
        {
            name: "asset",
            superClasses: ["core"],
            properties: [
                { name: "category", type: "String", collate: "default" },
                { name: "category_ext", type: "EmbeddedList", collate: "default" },
                { name: "compromised", type: "Boolean", collate: "default", default: "False" },
                { name: "description", type: "String", collate: "default" },
                { name: "kind_of_asset", type: "String", collate: "default" },
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "owner_aware", type: "Boolean", collate: "default", default: "False" },
                { name: "technical_characteristics", type: "EmbeddedList", collate: "default" },
            ],
        },
        {
            name: "attack-pattern",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "description", type: "String", collate: "default" },
                { name: "aliases", type: "String", collate: "default" },
                { name: "kill_chain_phases", type: "EmbeddedList", collate: "default" },
            ],
        },
        {
            name: "attributed_to",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "autonomous-system",
            superClasses: ["core"],
            properties: [
                { name: "number", type: "Integer", collate: "default", mandatory: true },
                { name: "name", type: "String", collate: "default" },
                { name: "rir", type: "String", collate: "default" },
            ],
        },
        {
            name: "based_on",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "beacons_to",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "campaign",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "description", type: "String", collate: "default" },
                { name: "aliases", type: "String", collate: "default" },
                { name: "first_seen", type: "DateTime", collate: "default" },
                { name: "last_seen", type: "DateTime", collate: "default" },
                { name: "objective", type: "String", collate: "default" },
            ],
        },
        {
            name: "characterizes",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "communicates_with",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "compromises",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "consists_of",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "controls",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "course-of-action",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "description", type: "String", collate: "default" },
                { name: "action", type: "String"},
            ],
        },
        {
            name: "delivers",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "directory",
            superClasses: ["core"],
            properties: [
                { name: "path", type: "String", collate: "default", mandatory: true },
                { name: "path_enc", type: "String", collate: "default" },
                { name: "ctime", type: "DateTime", collate: "default" },
                { name: "mtime", type: "DateTime", collate: "default" },
                { name: "atime", type: "DateTime", collate: "default" },
                { name: "contains_refs", type: "EmbeddedList", collate: "default" },
            ],
        },
        {
            name: "domain-name",
            superClasses: ["core"],
            properties: [
                { name: "value", type: "String", collate: "default", mandatory: true },
                { name: "resolves_to_refs", type: "EmbeddedList", collate: "default" },
            ],
        },
        {
            name: "downloads",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "drops",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "dynamic_analysis_of",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "email-addr",
            superClasses: ["core"],
            properties: [
                { name: "value", type: "String", collate: "default", mandatory: true },
                { name: "display_name", type: "String", collate: "default" },
                { name: "belongs_to_ref", type: "String", collate: "default" },
            ],
        },
        {
            name: "email-message",
            superClasses: ["core"],
            properties: [
                { name: "is_multipart", type: "Boolean", collate: "default", mandatory: true },
                { name: "date", type: "DateTime", collate: "default" },
                { name: "content_type", type: "String", collate: "default" },
                { name: "from_ref", type: "String", collate: "default" },
                { name: "sender_ref", type: "String", collate: "default" },
                { name: "to_refs", type: "EmbeddedList", collate: "default" },
                { name: "cc_refs", type: "EmbeddedList", collate: "default" },
                { name: "bcc_refs", type: "EmbeddedList", collate: "default" },
                { name: "message_id", type: "String", collate: "default" },
                { name: "subject", type: "String", collate: "default" },
                { name: "received_lines", type: "String", collate: "default" },
                { name: "additional_header_fields", type: "EmbeddedMap", collate: "default" },
                { name: "body", type: "String", collate: "default" },
                { name: "body_multipart", type: "EmbeddedList", collate: "default" },
                { name: "raw_email_ref", type: "String", collate: "default" },
            ],
        },
        {
            name: "exfiltrates_to",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "exploits",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "file",
            superClasses: ["core"],
            properties: [
                { name: "hashes", type: "EmbeddedMap", collate: "default" },
                { name: "size", type: "Integer", collate: "default" },
                { name: "name", type: "String", collate: "default" },
                { name: "name_enc", type: "String", collate: "default" },
                { name: "magic_number_hex", type: "String", collate: "default" },
                { name: "mime_type", type: "String", collate: "default" },
                { name: "ctime", type: "DateTime", collate: "default" },
                { name: "mtime", type: "DateTime", collate: "default" },
                { name: "atime", type: "DateTime", collate: "default" },
                { name: "parent_directory_ref", type: "String", collate: "default" },
                { name: "contains_refs", type: "EmbeddedList", collate: "default" },
                { name: "content_ref", type: "String", collate: "default" },
            ],
        },
        {
            name: "grouping",
            superClasses: ["core"],
            properties: [
                { name: "context", type: "String", collate: "default", mandatory: true},
                { name: "name", type: "String", collate: "default" },
                { name: "description", type: "String", collate: "default" },
            ],
        },
        {
            name: "has",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "hosts",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "identity",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "description", type: "String", collate: "default" },
                { name: "roles", type: "String", collate: "default"},
                { name: "identity_class", type: "String", collate: "default" },
                { name: "sectors", type: "String", collate: "default" },
                { name: "contact_information", type: "String", collate: "default" },
            ],
        },
        {
            name: "impersonates",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "indicates",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "indicator",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", collate: "default" },
                { name: "description", type: "String", collate: "default" },
                { name: "indicator_types", type: "String", collate: "default" },
                { name: "pattern", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "pattern_type", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "pattern_version", type: "String", collate: "default" },
                { name: "valid_from", type: "DateTime", mandatory: true, notNull: true, collate: "default" },
                { name: "valid_until", type: "DateTime", collate: "default" },
                { name: "kill_chain_phases", type: "EmbeddedList", collate: "default" },
            ],
        },
        {
            name: "infrastructure",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default"},
                { name: "infrastructure_types", type: "String", collate: "default"},
                { name: "description", type: "String", collate: "default" },
                { name: "aliases", type: "String", collate: "default" },
                { name: "kill_chain_phases", type: "EmbeddedList", collate: "default" },
                { name: "first_seen", type: "DateTime", collate: "default" },
                { name: "last_seen", type: "DateTime", collate: "default" },
            ],
        },
        {
            name: "intrusion-set",
            superClasses: ["core"],
            properties: [
                { name: "aliases", type: "String", collate: "default" },
                { name: "description", type: "String", collate: "default" },
                { name: "first_seen", type: "DateTime", collate: "default" },
                { name: "goals", type: "String", collate: "default" },
                { name: "last_seen", type: "DateTime", collate: "default" },
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "primary_motivation", type: "String", collate: "default" },
                { name: "resource_level", type: "String", collate: "default" },
                { name: "secondary_motivations", type: "String", collate: "default" },
            ],
        },
        {
            name: "investigates",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "ipv4-addr",
            superClasses: ["core"],
            properties: [
                { name: "value", type: "String", collate: "default", mandatory: true },
                { name: "resolves_to_refs", type: "EmbeddedList", collate: "default" },
                { name: "belongs_to_refs", type: "EmbeddedList", collate: "default" },
            ],
        },
        {
            name: "ipv6-addr",
            superClasses: ["core"],
            properties: [
                { name: "value", type: "String", collate: "default", mandatory: true },
                { name: "resolves_to_refs", type: "EmbeddedList", collate: "default" },
                { name: "belongs_to_refs", type: "EmbeddedList", collate: "default" },
            ],
        },
        {
            name: "language-content",
            superClasses: ["core"],
            properties: [
                { name: "object_ref", type: "String", collate: "default", mandatory: true },
                { name: "object_modified", type: "DateTime", collate: "default", mandatory: true  },
                { name: "contents", type: "EmbeddedMap", collate: "default", mandatory: true  },
            ],
        },
        {
            name: "location",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", collate: "default" },
                { name: "description", type: "String", collate: "default" },
                { name: "latitude", type: "Float", collate: "default" },
                { name: "longitude", type: "Float", collate: "default" },
                { name: "precision", type: "Float", collate: "default" },
                { name: "region", type: "String", collate: "default" },
                { name: "country", type: "String", collate: "default" },
                { name: "administrative_area", type: "String", collate: "default" },
                { name: "city", type: "String", collate: "default" },
                { name: "street_address", type: "String", collate: "default" },
                { name: "postal_code", type: "String", collate: "default" }
            ],
        },
        {
            name: "mac-addr",
            superClasses: ["core"],
            properties: [
                { name: "value", type: "String", collate: "default", mandatory: true }
            ],
        },
        {
            name: "malware",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", collate: "default" },
                { name: "description", type: "String", collate: "default" },
                { name: "malware_types", type: "String", collate: "default" },
                { name: "is_family", type: "Boolean", notNull: true, mandatory: true, collate: "default" },
                { name: "aliases", type: "String", collate: "default" },
                { name: "kill_chain_phases", type: "EmbeddedList", collate: "default" },
                { name: "first_seen", type: "DateTime", collate: "default" },
                { name: "last_seen", type: "DateTime", collate: "default" },
                { name: "operating_system_refs", type: "EmbeddedList", collate: "default" },
                { name: "architecture_execution_envs", type: "String", collate: "default" },
                { name: "implementaion_languages", type: "String", collate: "default" },
                { name: "capabilities", type: "String", collate: "default" },
                { name: "sample_refs", type: "EmbeddedList", collate: "default" },
            ],
        },
        {
            name: "malware-analysis",
            superClasses: ["core"],
            properties: [
                {name: "product", type: "String", notNull: true, mandatory: true, collate: "default"},
                {name: "version", type: "String", collate: "default"},
                {name: "host_vm_ref", type: "String", collate: "default"},
                {name: "operating_system_ref", type: "String", collate: "default"},
                {name: "installed_software_refs", type: "EmbeddedList", collate: "default"},
                {name: "configuration_version", type: "String", collate: "default"},
                {name: "modules", type: "EmbeddedList", collate: "default"},
                {name: "analysis_engine_version", type: "String", collate: "default"},
                {name: "analysis_definition_version", type: "String", collate: "default"},
                {name: "submitted", type: "DateTime", collate: "default"},
                {name: "analysis_started", type: "DateTime", collate: "default"},
                {name: "analysis_ended", type: "DateTime", collate: "default"},
                {name: "result_name", type: "String", collate: "default"},
                {name: "result", type: "String", collate: "default"},
                {name: "analysis_sco_refs", type: "EmbeddedList", collate: "default"},
                {name: "sample_ref", type: "String", collate: "default"},
            ],
        },
        {
            name: "marking-definition",
            superClasses: ["core"],
            properties: [
                { name: "definition", type: "EmbeddedMap", collate: "default" },
                { name: "definition_type", type: "String", collate: "default" },
            ],
        },
        {
            name: "mitigates",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "mutex",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", collate: "default", mandatory: true }
            ],
        },
        {
            name: "network-traffic",
            superClasses: ["core"],
            properties: [
                { name: "start", type: "DateTime", collate: "default" },
                { name: "end", type: "DateTime", collate: "default" },
                { name: "is_active", type: "Boolean", collate: "default" },
                { name: "src_ref", type: "String", collate: "default" },
                { name: "dst_ref", type: "String", collate: "default" },
                { name: "src_port", type: "Integer", collate: "default" },
                { name: "dst_port", type: "Integer", collate: "default" },
                { name: "protocols", type: "EmbeddedList", collate: "default", mandatory: true },
                { name: "src_byte_count", type: "Integer", collate: "default" },
                { name: "dst_byte_count", type: "Integer", collate: "default" },
                { name: "src_packets", type: "Integer", collate: "default" },
                { name: "dst_packets", type: "Integer", collate: "default" },
                { name: "ipfix", type: "EmbeddedMap", collate: "default" },
                { name: "src_payload_ref", type: "String", collate: "default" },
                { name: "dst_payload_ref", type: "String", collate: "default" },
                { name: "encapsulates_refs", type: "EmbeddedList", collate: "default" },
                { name: "encapsulated_by_ref", type: "String", collate: "default" },
            ],
        },
        {
            name: "note",
            superClasses: ["core"],
            properties: [
                {name: "content", type: "String", collate: "default", mandatory: true},
                {name: "object_refs", type: "EmbeddedList", collate: "default", mandatory: true},
                {name: "abstract", type: "String", collate: "default"},
                {name: "authors", type: "EmbeddedList", collate: "default"},
            ],
        },
        {
            name: "observed-data",
            superClasses: ["core"],
            properties: [
                { name: "first_observed", type: "DateTime", mandatory: true, notNull: true, collate: "default" },
                { name: "last_observed", type: "DateTime", mandatory: true, notNull: true, collate: "default" },
                { name: "number_observed", type: "Integer", mandatory: true, notNull: true, collate: "default" },
                { name: "objects_refs", type: "EmbeddedMap", collate: "default" },
            ],
        },
        {
            name: "opinion",
            superClasses: ["core"],
            properties: [
                {name: "explanation", type: "String", collate: "default"},
                {name: "authors", type: "EmbeddedList", collate: "default"},
                {name: "opinion", type: "String", collate: "default", mandatory: true},
                {name: "object_refs", type: "EmbeddedList", collate: "default", mandatory: true},
            ],
        },
        {
            name: "originates_from",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "owns",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "process",
            superClasses: ["core"],
            properties: [
                { name: "is_hidden", type: "Boolean", collate: "default" },
                { name: "pid", type: "Integer", collate: "default" },
                { name: "created_time", type: "DateTime", collate: "default" },
                { name: "cwd", type: "String", collate: "default" },
                { name: "command_line", type: "String", collate: "default" },
                { name: "environment_variables", type: "EmbeddedMap", collate: "default" },
                { name: "opened_connection_refs", type: "EmbeddedList", collate: "default" },
                { name: "creator_user_ref", type: "String", collate: "default" },
                { name: "image_ref", type: "String", collate: "default" },
                { name: "parent_ref", type: "String", collate: "default" },
                { name: "child_refs", type: "EmbeddedList", collate: "default" },
            ],
        },
        {
            name: "related_to",
            superClasses: ["relationship"],
            properties: [
            ],
        },

        {
            name: "report",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "description", type: "String", collate: "default" },
                { name: "published", type: "DateTime", mandatory: true, notNull: true, collate: "default" },
                { name: "object_refs", type: "EmbeddedList", mandatory: true, notNull: true, collate: "default" },
            ],
        },
        {
            name: "software",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", collate: "default", mandatory: true },
                { name: "cpe", type: "String", collate: "default" },
                { name: "languages", type: "EmbeddedList", collate: "default" },
                { name: "vendor", type: "String", collate: "default" },
                { name: "version", type: "String", collate: "default" },
            ],
        },
        {
            name: "static_analysis_of",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "targets",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "threat-actor",
            superClasses: ["core"],
            properties: [
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "description", type: "String", collate: "default" },
                { name: "threat_actor_types", type: "String", collate: "default"},
                { name: "aliases", type: "String", collate: "default" },
                { name: "first_seen", type: "String", collate: "default"},
                { name: "last_seen", type: "String", collate: "default"},
                { name: "roles", type: "String", collate: "default" },
                { name: "goals", type: "String", collate: "default" },
                { name: "sophistication", type: "String", collate: "default" },
                { name: "resource_level", type: "String", collate: "default" },
                { name: "primary_motivation", type: "String", collate: "default" },
                { name: "secondary_motivations", type: "String", collate: "default" },
                { name: "personal_motivations", type: "String", collate: "default" },
            ],
        },
        {
            name: "tool",
            superClasses: ["core"],
            properties: [
                { name: "description", type: "String", collate: "default" },
                { name: "kill_chain_phases", type: "EmbeddedList", collate: "default" },
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default" },
                { name: "tool_version", type: "String", collate: "default" },
            ],
        },
        {
            name: "url",
            superClasses: ["core"],
            properties: [
                { name: "value", type: "String", collate: "default", mandatory: true }
            ],
        },
        {
            name: "user-account",
            superClasses: ["core"],
            properties: [
                { name: "user_id", type: "String", collate: "default" },
                { name: "credential", type: "String", collate: "default" },
                { name: "account_login", type: "String", collate: "default" },
                { name: "account_type", type: "String", collate: "default" },
                { name: "display_name", type: "String", collate: "default" },
                { name: "is_service_account", type: "Boolean", collate: "default" },
                { name: "is_privileged", type: "Boolean", collate: "default" },
                { name: "can_escalate_privs", type: "Boolean", collate: "default" },
                { name: "is_disabled", type: "Boolean", collate: "default" },
                { name: "account_created", type: "DateTime", collate: "default" },
                { name: "account_expires", type: "DateTime", collate: "default" },
                { name: "credential_last_changed", type: "DateTime", collate: "default" },
                { name: "account_first_login", type: "DateTime", collate: "default" },
                { name: "account_last_login", type: "DateTime", collate: "default" },
            ],
        },
        {
            name: "uses",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "variant_of",
            superClasses: ["relationship"],
            properties: [
            ],
        },
        {
            name: "vulnerability",
            superClasses: ["core"],
            properties: [
                { name: "description", type: "String", collate: "default" },
                { name: "name", type: "String", mandatory: true, notNull: true, collate: "default" },
            ],
        },
        {
            name: "windows-registry-key",
            superClasses: ["core"],
            properties: [
                { name: "key", type: "String", collate: "default" },
                { name: "values", type: "EmbeddedList", collate: "default" },
                { name: "modified_time", type: "DateTime", collate: "default" },
                { name: "creator_user_ref", type: "String", collate: "default" },
                { name: "number_of_subkeys", type: "Integer", collate: "default" },
            ],
        },
        {
            name: "x509-certificate",
            superClasses: ["core"],
            properties: [
                { name: "is_self_signed", type: "Boolean", collate: "default" },
                { name: "hashes", type: "EmbeddedMap", collate: "default" },
                { name: "version", type: "String", collate: "default" },
                { name: "serial_number", type: "String", collate: "default" },
                { name: "signature_algorithm", type: "String", collate: "default" },
                { name: "issuer", type: "String", collate: "default" },
                { name: "validity_not_before", type: "DateTime", collate: "default" },
                { name: "validity_not_after", type: "DateTime", collate: "default" },
                { name: "subject", type: "String", collate: "default" },
                { name: "subject_public_key_algorithm", type: "String", collate: "default" },
                { name: "subject_public_key_modulus", type: "String", collate: "default" },
                { name: "subject_public_key_exponent", type: "Integer", collate: "default" },
                { name: "x509_v3_extensions", type: "EmbeddedMap", collate: "default" },
            ],
        },
    ],
};
