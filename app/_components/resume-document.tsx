import React from "react";
import { Document, Page, Text, View, StyleSheet, Svg, Path, Link } from "@react-pdf/renderer";
import { site, experiences, education, certifications } from "@/content/site";

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 34,
    fontFamily: "Helvetica",
    color: "#1e293b",
    fontSize: 10,
    lineHeight: 1.45,
    backgroundColor: "#ffffff",
  },
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#0091ff",
    paddingBottom: 14,
    marginBottom: 16,
  },
  name: {
    fontSize: 23,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
    marginBottom: 6,
  },
  role: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: "#0091ff",
    marginTop: 2,
    marginBottom: 14,
  },
  contactColumn: {
    flexDirection: "column",
    gap: 5.5,
    fontSize: 10,
    color: "#475569",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactIcon: {
    width: 11,
    height: 11,
    marginRight: 6,
  },
  contactLabel: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#334155",
    marginRight: 4,
  },
  contactItem: {
    fontSize: 10,
    color: "#475569",
  },
  contactLink: {
    fontSize: 10,
    color: "#0091ff",
    textDecoration: "none",
  },
  section: {
    marginBottom: 15,
  },
  summarySection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    paddingBottom: 3,
    marginBottom: 7,
  },
  summaryText: {
    fontSize: 11.5,
    color: "#334155",
    lineHeight: 1.65,
  },
  item: {
    marginBottom: 11,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  companyName: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#0091ff",
  },
  roleText: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: "#334155",
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
  },
  itemSubtitle: {
    fontSize: 10,
    color: "#475569",
    marginBottom: 3,
  },
  itemPeriod: {
    fontSize: 10,
    color: "#64748b",
    fontFamily: "Helvetica",
  },
  itemDescription: {
    fontSize: 11,
    color: "#334155",
    marginBottom: 5,
    lineHeight: 1.65,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3.5,
    marginTop: 1.5,
  },
  tag: {
    backgroundColor: "#f0f7ff",
    color: "#0070f3",
    fontSize: 8.5,
    paddingHorizontal: 5.5,
    paddingVertical: 2.5,
    borderRadius: 2.5,
    marginRight: 3.5,
    marginBottom: 2.5,
  },
  certRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  certName: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
  },
  certLink: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: "#0091ff",
    textDecoration: "none",
  },
  certIssuer: {
    fontSize: 9.5,
    color: "#475569",
  },
  certDate: {
    fontSize: 9,
    color: "#64748b",
  },
});

export function ResumeDocument() {
  return (
    <Document title={`Currículo - ${site.person}`} author={site.person}>
      <Page size="A4" style={styles.page}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.name}>{site.person}</Text>
          <Text style={styles.role}>{site.role}</Text>
          <View style={styles.contactColumn}>
            {/* Localidade */}
            <View style={styles.contactRow}>
              <Svg style={styles.contactIcon} viewBox="0 0 24 24">
                <Path
                  fill="#64748b"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </Svg>
              <Text style={styles.contactLabel}>Localidade:</Text>
              <Text style={styles.contactItem}>{site.location}</Text>
            </View>

            {/* E-mail */}
            <View style={styles.contactRow}>
              <Svg style={styles.contactIcon} viewBox="0 0 24 24">
                <Path
                  fill="#64748b"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </Svg>
              <Text style={styles.contactLabel}>E-mail:</Text>
              <Link src={`mailto:${site.email}`} style={styles.contactLink}>
                {site.email}
              </Link>
            </View>

            {/* Site / Portfólio */}
            <View style={styles.contactRow}>
              <Svg style={styles.contactIcon} viewBox="0 0 24 24">
                <Path
                  fill="#64748b"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                />
              </Svg>
              <Text style={styles.contactLabel}>Site:</Text>
              <Link src={site.url} style={styles.contactLink}>
                {site.url}
              </Link>
            </View>
          </View>
        </View>

        {/* Resumo Profissional com maior espaçamento até a Experiência */}
        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>Resumo Profissional</Text>
          <Text style={styles.summaryText}>{site.summary}</Text>
        </View>

        {/* Experiência Profissional */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          {experiences.map((exp, idx) => (
            <View key={idx} style={styles.item} wrap={false}>
              <View style={styles.itemHeader}>
                <Text style={styles.companyName}>{exp.company}</Text>
                <Text style={styles.itemPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.roleText}>{exp.role}</Text>
              <Text style={styles.itemDescription}>{exp.description}</Text>
              <View style={styles.tagsRow}>
                {exp.stack.map((tech, tIdx) => (
                  <Text key={tIdx} style={styles.tag}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Formação Acadêmica */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          {education.map((edu, idx) => (
            <View key={idx} style={styles.item} wrap={false}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>
                  {edu.degree} em {edu.field}
                </Text>
                <Text style={styles.itemPeriod}>{edu.period}</Text>
              </View>
              <Text style={styles.itemSubtitle}>{edu.institution}</Text>
              {edu.description ? (
                <Text style={styles.itemDescription}>{edu.description}</Text>
              ) : null}
            </View>
          ))}
        </View>

        {/* Certificações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certificações</Text>
          {certifications.slice(0, 4).map((cert, idx) => (
            <View key={idx} style={styles.certRow} wrap={false}>
              <View style={{ flex: 1 }}>
                {cert.verifyUrl ? (
                  <Link
                    src={
                      cert.verifyUrl.startsWith("http")
                        ? cert.verifyUrl
                        : `${site.url}${cert.verifyUrl}`
                    }
                    style={styles.certLink}
                  >
                    {cert.name} ↗
                  </Link>
                ) : (
                  <Text style={styles.certName}>{cert.name}</Text>
                )}
                <Text style={styles.certIssuer}>{cert.issuer}</Text>
              </View>
              <Text style={styles.certDate}>{cert.issued}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
