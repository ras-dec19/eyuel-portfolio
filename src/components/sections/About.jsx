import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const layer2SwitchingSkills = [
    "VLANs / VLAN Segmentation",
    "802.1Q Trunking",
    "Native VLAN Hardening",
    "DTP Disable",
    "VTPv2",
    "Rapid PVST+",
    "EtherChannel (PAgP / LACP)",
    "PortFast",
    "BPDU Guard",
  ];

  const routingAndHighAvailabilitySkills = [
    "Inter-VLAN Routing",
    "HSRPv2",
    "OSPF (Area 0)",
    "Static Routing",
    "Floating Static Routes",
    "Default Route Advertisement",
    "IPv4 / IPv6 Addressing",
    "NAT (Static & PAT)",
  ];

  const networkServicesSkills = [
    "DHCP",
    "DHCP Relay (ip helper-address)",
    "DNS",
    "NTP with Authentication",
    "SNMP (Read-Only)",
    "Syslog (Remote + Buffered Logging)",
    "FTP",
  ];

  const securityAndHardeningSkills = [
    "SSHv2-Only Management",
    "VTY ACL Restrictions",
    "Standard / Extended ACLs",
    "Port Security (Sticky / Restrict)",
    "DHCP Snooping",
    "Dynamic ARP Inspection",
    "CDP Disable / LLDP Enable",
    "Administrative Shutdown of Unused Ports",
  ];

  const automationSkills = [
    "Python",
    "REST API Concepts",
    "JSON / YAML",
    "Jinja2 Templating",
    "Ansible",
    "Git",
    "CLI Output Parsing",
    "Config Validation",
  ];

  const wirelessSkills = [
    "WLC Configuration",
    "WPA2-PSK WLANs",
    "SSID / Dynamic Interface Setup",
    "LWAP Association Verification",
  ];

  const troubleshootingAndMonitoringSkills = [
    "Wireshark",
    "Ping / Traceroute",
    "CLI Troubleshooting",
    "OSPF / VLAN / STP Verification",
    "Layer 2 / Layer 3 Troubleshooting",
    "Configuration Validation",
  ];

  const toolsAndPlatformsSkills = [
    "Cisco Packet Tracer",
    "Cisco IOS CLI",
    "Wireshark",
    "Linux / CLI",
  ];

  return (
    <section id="about" className="scroll-mt-24 py-20 px-4">
      <RevealOnScroll>
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-6 sm:p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              CCNA-focused network engineer with hands-on experience building
              secure, resilient enterprise lab environments across switching,
              routing, redundancy, network services, and automation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Layer 2 Switching</h3>
                <div className="flex flex-wrap gap-2">
                  {layer2SwitchingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Routing & High Availability
                </h3>
                <div className="flex flex-wrap gap-2">
                  {routingAndHighAvailabilitySkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Network Services</h3>
                <div className="flex flex-wrap gap-2">
                  {networkServicesSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Security & Hardening</h3>
                <div className="flex flex-wrap gap-2">
                  {securityAndHardeningSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Automation</h3>
                <div className="flex flex-wrap gap-2">
                  {automationSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Wireless</h3>
                <div className="flex flex-wrap gap-2">
                  {wirelessSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Troubleshooting & Monitoring
                </h3>
                <div className="flex flex-wrap gap-2">
                  {troubleshootingAndMonitoringSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsAndPlatformsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> - Southwest
                  Minnesota State University (2020 - 2024)
                </li>
                <li>
                  Relevant Coursework: Computer Networks, Operating Systems,
                  Programming (Python)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>

              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white">
                    Information Technology Support Specialist
                  </h4>
                  <p className="text-sm text-gray-400">
                    Southwest Minnesota State University · Marshall, MN
                  </p>
                  <p className="text-sm text-gray-400 mb-3">
                    Nov 2020 – May 2022
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Resolved 100+ support tickets with emphasis on network
                      access and connectivity (wired/wireless), account
                      provisioning, and service availability across Windows,
                      macOS, and Linux.
                    </li>
                    <li>
                      Diagnosed campus network incidents including DHCP lease
                      failures, DNS resolution issues, IP conflicts, and default
                      gateway misconfigurations; documented findings to speed
                      escalation and root-cause analysis.
                    </li>
                    <li>
                      Validated lab switch and router readiness using Cisco IOS
                      show commands to confirm interface status, addressing, and
                      baseline network behavior.
                    </li>
                    <li>
                      Automated repetitive network checks by building Python
                      utilities for reachability (ping), DNS validation, and
                      basic log parsing, improving troubleshooting consistency
                      and reducing manual steps.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
