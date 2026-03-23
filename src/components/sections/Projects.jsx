import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

// Put these files in: src/assets/projects/
import projectFile from "../../assets/projects/ccna-enterprise-mega-lab.pka";
import referencePdf from "../../assets/projects/ccna-reference.pdf";
import portMapImage from "../../assets/projects/ccna-port-map.png";
import ipPlanImage from "../../assets/projects/ccna-ip-plan.png";

export const Projects = () => {
  const [openProject, setOpenProject] = useState(false);

  return (
    <>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                  CCNA Enterprise Network Mega Lab (Cisco Packet Tracer)
                </h3>

                <p className="text-gray-400 mb-4">
                  Built a multi-site, three-tier enterprise network with
                  redundant Internet edge connectivity and validated
                  configurations to 100% completion.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "VLANs",
                    "OSPF",
                    "HSRPv2",
                    "Rapid PVST+",
                    "EtherChannel",
                    "NAT",
                    "SSH",
                    "DHCP",
                    "DNS",
                    "NTP",
                    "IPv6",
                    "Cisco Packet Tracer",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>
                    Implemented Layer 2 design with VLAN segmentation, 802.1Q
                    trunking, native VLAN hardening, DTP disabled, VTPv2, and
                    shutdown of unused ports.
                  </li>
                  <li>
                    Deployed EtherChannel using PAgP and LACP, including a Layer
                    3 EtherChannel between core switches, routed links, and
                    inter-VLAN routing on multilayer switches.
                  </li>
                  <li>
                    Configured resiliency with HSRPv2 across multiple VLANs and
                    Rapid PVST+ root priorities aligned to HSRP active/standby
                    roles, plus PortFast and BPDU Guard on edge ports.
                  </li>
                  <li>
                    Implemented OSPF Area 0 with manual router IDs, passive
                    interfaces, point-to-point network type, and static plus
                    floating default routes with route advertisement.
                  </li>
                  <li>
                    Delivered DHCP pools with exclusions and relay, DNS,
                    authenticated NTP, SNMP (read-only), Syslog, SSHv2-only with
                    VTY ACLs, extended ACLs, Port Security, DHCP Snooping,
                    Dynamic ARP Inspection, and NAT (static and PAT).
                  </li>
                  <li>
                    Configured IPv6 addressing and default routes, plus a
                    WPA2-PSK WLAN on a WLC with verified LWAP association.
                  </li>
                </ul>

                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setOpenProject(true)}
                    className="text-blue-400 my-2 font-medium hover:text-cyan-300 transition-colors"
                  >
                    View Project &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {openProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1120] p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpenProject(false)}
              className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-white transition-colors"
              aria-label="Close project details"
            >
              ×
            </button>

            <div className="pr-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                CCNA Enterprise Network Mega Lab
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                This project includes the Cisco Packet Tracer lab file, a quick
                reference PDF, and supporting images showing the port mapping
                and IP addressing plan.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    How to view the project
                  </h4>
                  <ol className="list-decimal list-inside text-gray-300 space-y-3">
                    <li>
                      Click{" "}
                      <span className="text-blue-400 font-medium">
                        Download Packet Tracer Project
                      </span>{" "}
                      to save the <span className="font-medium">.pka</span> lab
                      file.
                    </li>
                    <li>
                      Open the file in{" "}
                      <span className="font-medium">Cisco Packet Tracer</span>.
                    </li>
                    <li>
                      Use the included PDF and images below to review the port
                      mappings and IP addressing while you explore the lab.
                    </li>
                    <li>
                      Test VLANs, routing, HSRP, NAT, DHCP, wireless, and
                      security features directly inside Packet Tracer.
                    </li>
                  </ol>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    Downloads
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={projectFile}
                      download="ccna-enterprise-mega-lab.pka"
                      className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-3 text-white font-medium hover:bg-blue-600 transition-colors"
                    >
                      Download Packet Tracer Project
                    </a>

                    <a
                      href={referencePdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-blue-500/40 px-4 py-3 text-blue-300 font-medium hover:bg-blue-500/10 transition-colors"
                    >
                      Open Reference PDF
                    </a>
                  </div>

                  <p className="text-sm text-gray-400 mt-4">
                    The PDF and screenshots provide a quick visual guide for the
                    lab layout, port connections, and addressing plan.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Additional Pictures
                </h4>

                <div className="grid grid-cols-1 gap-6">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-400 mb-3">
                      Port mapping reference
                    </p>
                    <img
                      src={portMapImage}
                      alt="CCNA lab port mapping reference"
                      className="w-full rounded-lg border border-white/10"
                    />
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-400 mb-3">
                      IP addressing plan
                    </p>
                    <img
                      src={ipPlanImage}
                      alt="CCNA lab IP addressing plan"
                      className="w-full rounded-lg border border-white/10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
