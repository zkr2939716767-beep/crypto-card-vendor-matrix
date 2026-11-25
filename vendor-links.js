(function () {
  "use strict";

  const vendors = {
    goplus: { name: "GoPlus Security", url: "https://gopluslabs.io/", domain: "gopluslabs.io", abbr: "GP", bg: "#0F172A", fg: "#FFFFFF" },
    sift: { name: "Sift", url: "https://sift.com/", domain: "sift.com", abbr: "SF", bg: "#0F172A", fg: "#FFFFFF" },
    blocksec: { name: "BlockSec", url: "https://blocksec.com/", domain: "blocksec.com", abbr: "BS", bg: "#0F172A", fg: "#FFFFFF" },
    certora: { name: "Certora", url: "https://www.certora.com/", domain: "certora.com", abbr: "CE", bg: "#0F172A", fg: "#FFFFFF" },
    chainalysis: { name: "Chainalysis", url: "https://www.chainalysis.com/", domain: "chainalysis.com", abbr: "CA", bg: "#0F172A", fg: "#FFFFFF" },
    elliptic: { name: "Elliptic", url: "https://www.elliptic.co/", domain: "elliptic.co", abbr: "EL", bg: "#0F172A", fg: "#FFFFFF" },
    hypernative: { name: "Hypernative", url: "https://www.hypernative.io/", domain: "hypernative.io", abbr: "HN", bg: "#0F172A", fg: "#FFFFFF" },
    immunefi: { name: "Immunefi", url: "https://immunefi.com/", domain: "immunefi.com", abbr: "IM", bg: "#0F172A", fg: "#FFFFFF" },
    nasdaq: { name: "Nasdaq", url: "https://www.nasdaq.com/", domain: "nasdaq.com", abbr: "NQ", bg: "#0F172A", fg: "#FFFFFF" },
    paladin: { name: "Paladin", url: "https://paladinsec.co/", domain: "paladinsec.co", abbr: "PA", bg: "#0F172A", fg: "#FFFFFF" },
    pomelo: { name: "Pomelo", url: "https://pomelo.la/", domain: "pomelo.la", abbr: "PO", bg: "#0F172A", fg: "#FFFFFF" },
    sardine: { name: "Sardine", url: "https://www.sardine.ai/", domain: "sardine.ai", abbr: "SA", bg: "#0F172A", fg: "#FFFFFF" },
    slowmist: { name: "SlowMist", url: "https://www.slowmist.com/", domain: "slowmist.com", abbr: "SM", bg: "#0F172A", fg: "#FFFFFF" },
    trmlabs: { name: "TRM Labs", url: "https://www.trmlabs.com/", domain: "trmlabs.com", abbr: "TRM", bg: "#0F172A", fg: "#FFFFFF" },
    worldcheck: { name: "LSEG World-Check", url: "https://www.lseg.com/en/risk-intelligence/screening-solutions/world-check-kyc-screening", domain: "lseg.com", abbr: "WC", bg: "#0F172A", fg: "#FFFFFF" },
    bybit: { name: "Bybit Card", url: "https://www.bybit.com/en/cards/", domain: "bybit.com", abbr: "BY", bg: "#0F172A", fg: "#FBBF24" },
    bitget: { name: "Bitget Card", url: "https://www.bitget.com/cards", domain: "bitget.com", abbr: "BG", bg: "#0F172A", fg: "#22D3EE" },
    etherfi: { name: "ether.fi Cash", url: "https://www.ether.fi/cash", domain: "ether.fi", abbr: "ef", bg: "#4F46E5", fg: "#FFFFFF" },
    kast: { name: "KAST", url: "https://www.kast.xyz/", domain: "kast.xyz", abbr: "K", bg: "#09090B", fg: "#A3E635" },
    visa: { name: "VISA", url: "https://www.visa.com/", domain: "visa.com", abbr: "V", bg: "#1E3A8A", fg: "#FFFFFF" },
    mastercard: { name: "Mastercard", url: "https://www.mastercard.com/", domain: "mastercard.com", abbr: "MC", bg: "#DC2626", fg: "#FDE047" },
    immersve: { name: "Immersve", url: "https://immersve.com/", domain: "immersve.com", abbr: "IM", bg: "#7E22CE", fg: "#FFFFFF" },
    dcs: { name: "DCS Card Centre", url: "https://dcscc.com/", domain: "dcscc.com", abbr: "DC", bg: "#047857", fg: "#FFFFFF" },
    thirdnational: { name: "Third National", url: "https://www.nimbuslending.com/", domain: "nimbuslending.com", abbr: "3N", bg: "#1E293B", fg: "#FFFFFF" },
    rain: { name: "Rain", url: "https://www.rain.xyz/", domain: "rain.xyz", abbr: "R", bg: "#0EA5E9", fg: "#FFFFFF" },
    bridge: { name: "Bridge", url: "https://www.bridge.xyz/", domain: "bridge.xyz", abbr: "B", bg: "#0F172A", fg: "#FFFFFF" },
    stripe: { name: "Stripe", url: "https://stripe.com/", domain: "stripe.com", abbr: "S", bg: "#635BFF", fg: "#FFFFFF" },
    openpayd: { name: "OpenPayd", url: "https://www.openpayd.com/", domain: "openpayd.com", abbr: "OP", bg: "#2563EB", fg: "#FFFFFF" },
    pavebank: { name: "Pave Bank", url: "https://www.pavebank.com/", domain: "pavebank.com", abbr: "PB", bg: "#0F766E", fg: "#FFFFFF" },
    noah: { name: "Noah", url: "https://noah.com/", domain: "noah.com", abbr: "N", bg: "#171717", fg: "#FFFFFF" },
    due: { name: "Due", url: "https://www.opendue.com/", domain: "opendue.com", abbr: "DU", bg: "#7C3AED", fg: "#FFFFFF" },
    moonpay: { name: "MoonPay", url: "https://www.moonpay.com/", domain: "moonpay.com", abbr: "MP", bg: "#7D00FF", fg: "#FFFFFF" },
    bitgo: { name: "BitGo", url: "https://www.bitgo.com/", domain: "bitgo.com", abbr: "BG", bg: "#1D4ED8", fg: "#FFFFFF" },
    privy: { name: "Privy", url: "https://www.privy.io/", domain: "privy.io", abbr: "PV", bg: "#4F46E5", fg: "#FFFFFF" },
    leadbank: { name: "Lead Bank", url: "https://www.lead.bank/", domain: "lead.bank", abbr: "LB", bg: "#065F46", fg: "#FFFFFF" },
    tazapay: { name: "Tazapay", url: "https://tazapay.com/", domain: "tazapay.com", abbr: "TZ", bg: "#0D9488", fg: "#FFFFFF" },
    swft: { name: "SWFT Blockchain", url: "https://www.swft.pro/", domain: "swft.pro", abbr: "SW", bg: "#3B82F6", fg: "#FFFFFF" },
    unizen: { name: "Unizen", url: "https://www.unizen.io/", domain: "unizen.io", abbr: "UZ", bg: "#6D28D9", fg: "#FFFFFF" },
    enso: { name: "Enso", url: "https://www.enso.build/", domain: "enso.build", abbr: "EN", bg: "#18181B", fg: "#FFFFFF" },
    reown: { name: "Reown", url: "https://reown.com/", domain: "reown.com", abbr: "RW", bg: "#EA580C", fg: "#FFFFFF" },
    lifi: { name: "LI.FI", url: "https://li.fi/", domain: "li.fi", abbr: "LI", bg: "#C026D3", fg: "#FFFFFF" },
    mantle: { name: "Mantle", url: "https://www.mantle.xyz/", domain: "mantle.xyz", abbr: "MT", bg: "#059669", fg: "#FFFFFF" },
    aave: { name: "Aave", url: "https://aave.com/", domain: "aave.com", abbr: "AA", bg: "#9333EA", fg: "#FFFFFF" },
    cian: { name: "CIAN", url: "https://cian.app/", domain: "cian.app", abbr: "CI", bg: "#065F46", fg: "#FFFFFF" },
    venus: { name: "Venus", url: "https://venus.io/", domain: "venus.io", abbr: "VN", bg: "#D97706", fg: "#FFFFFF" },
    kamino: { name: "Kamino", url: "https://kamino.finance/", domain: "kamino.finance", abbr: "KM", bg: "#0284C7", fg: "#FFFFFF" },
    veda: { name: "Veda", url: "https://veda.tech/", domain: "veda.tech", abbr: "VD", bg: "#6D28D9", fg: "#FFFFFF" },
    gauntlet: { name: "Gauntlet", url: "https://www.gauntlet.xyz/", domain: "gauntlet.xyz", abbr: "GL", bg: "#0F172A", fg: "#FFFFFF" },
    noncecapital: { name: "Nonce Capital", url: "https://nonce-capital.xyz/", domain: "nonce-capital.xyz", abbr: "NC", bg: "#3F3F46", fg: "#FFFFFF" },
    morpho: { name: "Morpho", url: "https://morpho.org/", domain: "morpho.org", abbr: "MP", bg: "#2563EB", fg: "#FFFFFF" },
    pendle: { name: "Pendle", url: "https://www.pendle.finance/", domain: "pendle.finance", abbr: "PD", bg: "#0D9488", fg: "#FFFFFF" },
    curve: { name: "Curve", url: "https://curve.fi/", domain: "curve.fi", abbr: "CV", bg: "#E11D48", fg: "#FFFFFF" },
    grandmillennium: { name: "Grand Millennium", url: "https://www.millenniumhotels.com/", domain: "millenniumhotels.com", abbr: "GM", bg: "#B45309", fg: "#FFFFFF" },
    entravel: { name: "Entravel", url: "https://entravel.com/", domain: "entravel.com", abbr: "ET", bg: "#2563EB", fg: "#FFFFFF" },
    plazapremium: { name: "Plaza Premium Lounge", url: "https://www.plazapremiumlounge.com/", domain: "plazapremiumlounge.com", abbr: "PP", bg: "#1E293B", fg: "#FFFFFF" },
    tillo: { name: "Tillo", url: "https://www.tillo.com/", domain: "tillo.com", abbr: "TL", bg: "#F43F5E", fg: "#FFFFFF" },
    reloadly: { name: "Reloadly", url: "https://www.reloadly.com/", domain: "reloadly.com", abbr: "RL", bg: "#059669", fg: "#FFFFFF" },
    tripcom: { name: "Trip.com", url: "https://www.trip.com/", domain: "trip.com", abbr: "TC", bg: "#0284C7", fg: "#FFFFFF" },
    dragonpass: { name: "DragonPass", url: "https://en.dragonpass.com.cn/", domain: "dragonpass.com.cn", abbr: "DP", bg: "#DC2626", fg: "#FFFFFF" },
    gigsky: { name: "GigSky", url: "https://www.gigsky.com/", domain: "gigsky.com", abbr: "GS", bg: "#0891B2", fg: "#FFFFFF" },
    axa: { name: "AXA", url: "https://www.axa.com/", domain: "axa.com", abbr: "AX", bg: "#1E3A8A", fg: "#FFFFFF" },
    plume: { name: "Plume", url: "https://plume.org/", domain: "plume.org", abbr: "PL", bg: "#E11D48", fg: "#FFFFFF" },
    digift: { name: "DigiFT", url: "https://digift.sg/", domain: "digift.sg", abbr: "DF", bg: "#1D4ED8", fg: "#FFFFFF" },
    pimco: { name: "PIMCO", url: "https://www.pimco.com/", domain: "pimco.com", abbr: "PM", bg: "#1E293B", fg: "#FFFFFF" },
    cmbi: { name: "CMBI", url: "https://www.cmbi.com.hk/en-US/", domain: "cmbi.com.hk", abbr: "CM", bg: "#B91C1C", fg: "#FFFFFF" },
    statestreet: { name: "State Street", url: "https://www.statestreet.com/", domain: "statestreet.com", abbr: "SS", bg: "#172554", fg: "#FFFFFF" },
    cmbwinglung: { name: "CMB Wing Lung Bank", url: "https://www.cmbwinglungbank.com/wlb_corporate/en/index.html", domain: "cmbwinglungbank.com", abbr: "CW", bg: "#991B1B", fg: "#FFFFFF" },
    alpaca: { name: "Alpaca", url: "https://alpaca.markets/", domain: "alpaca.markets", abbr: "AL", bg: "#FACC15", fg: "#0F172A" },
    networkfirm: { name: "The Network Firm", url: "https://www.thenetworkfirm.com/", domain: "thenetworkfirm.com", abbr: "NF", bg: "#334155", fg: "#FFFFFF" },
    ondo: { name: "Ondo Finance", url: "https://ondo.finance/", domain: "ondo.finance", abbr: "ON", bg: "#0F172A", fg: "#FFFFFF" },
    xstocks: { name: "xStocks (Backed)", url: "https://xstocks.com/", domain: "xstocks.com", abbr: "xS", bg: "#059669", fg: "#FFFFFF" },
    paxos: { name: "Paxos", url: "https://paxos.com/", domain: "paxos.com", abbr: "PX", bg: "#F59E0B", fg: "#FFFFFF" },
    pyth: { name: "Pyth", url: "https://pyth.network/", domain: "pyth.network", abbr: "PY", bg: "#7E22CE", fg: "#FFFFFF" },
    chainlink: { name: "Chainlink", url: "https://chain.link/", domain: "chain.link", abbr: "CL", bg: "#2563EB", fg: "#FFFFFF" },
    sumsub: { name: "Sumsub", url: "https://sumsub.com/", domain: "sumsub.com", abbr: "SS", bg: "#0284C7", fg: "#FFFFFF" },
    m0: { name: "M0", url: "https://www.m0.org/", domain: "m0.org", abbr: "M0", bg: "#171717", fg: "#FFFFFF" },
    chronicle: { name: "Chronicle", url: "https://chroniclelabs.org/", domain: "chroniclelabs.org", abbr: "CH", bg: "#047857", fg: "#FFFFFF" },
    safe: { name: "Gnosis Safe", url: "https://safe.global/", domain: "safe.global", abbr: "SF", bg: "#12FF80", fg: "#0F172A" },
    turnkey: { name: "Turnkey", url: "https://www.turnkey.com/", domain: "turnkey.com", abbr: "TK", bg: "#0F172A", fg: "#FFFFFF" },
    fireblocks: { name: "Fireblocks", url: "https://www.fireblocks.com/", domain: "fireblocks.com", abbr: "FB", bg: "#2563EB", fg: "#FFFFFF" },
    copper: { name: "Copper", url: "https://copper.co/", domain: "copper.co", abbr: "CP", bg: "#F97316", fg: "#FFFFFF" },
    zodia: { name: "Zodia Custody", url: "https://zodia-custody.com/", domain: "zodia-custody.com", abbr: "ZD", bg: "#0F172A", fg: "#FFFFFF" }
  };

  const displayNames = Object.keys(vendors)
    .filter((key) => !["bybit", "bitget", "etherfi", "kast", "stripe"].includes(key))
    .map((key) => [vendors[key].name.replace(/\s+\(Backed\)$/i, ""), key])
    .sort((a, b) => b[0].length - a[0].length);
  const aliases = [
    ["bridge / stripe", "bridge-stripe"],
    ["kast points", "kast"],
    ["cmb wing lung", "cmbwinglung"],
    ["plaza premium", "plazapremium"],
    ["dcs", "dcs"]
  ];

  function matchVendor(label) {
    const clean = label.trim().toLocaleLowerCase();
    const alias = aliases.find(([name]) => clean.startsWith(name));
    if (alias) return alias[1];
    return displayNames.find(([name]) => clean.startsWith(name.toLocaleLowerCase()))?.[1] || null;
  }

  function createLogo(entry, className) {
    const key = Object.keys(vendors).find((key) => vendors[key] === entry);
    const localAsset = window.VENDOR_LOGO_ASSETS?.[key];
    const box = document.createElement("span");
    box.className = className;

    const img = document.createElement("img");
    img.alt = "";
    img.loading = "eager";
    img.width = 32;
    img.height = 32;
    img.referrerPolicy = "no-referrer";
    img.dataset.step = localAsset ? "local" : "google";
    img.hidden = true;

    const fallback = document.createElement("span");
    fallback.className = "logo-fallback";
    fallback.textContent = entry.abbr;
    fallback.style.backgroundColor = entry.bg;
    fallback.style.color = entry.fg;

    img.addEventListener("load", () => {
      img.hidden = false;
      fallback.hidden = true;
    });
    img.addEventListener("error", () => {
      if (img.dataset.step === "local") {
        img.dataset.step = "google";
        img.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(entry.domain)}&sz=128`;
      } else if (img.dataset.step === "google") {
        img.dataset.step = "duckduckgo";
        img.src = `https://icons.duckduckgo.com/ip3/${encodeURIComponent(entry.domain)}.ico`;
      } else {
        img.remove();
        fallback.hidden = false;
      }
    });

    box.append(img, fallback);
    img.src = localAsset || `https://www.google.com/s2/favicons?domain=${encodeURIComponent(entry.domain)}&sz=128`;
    return box;
  }

  function makeVendorLink(key, label) {
    const entry = vendors[key];
    const link = document.createElement("a");
    link.className = "logo-only-link";
    link.href = entry.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = `访问 ${entry.name} 官网`;
    link.setAttribute("aria-label", `访问 ${entry.name} 官方网站（新窗口）`);
    link.append(createLogo(entry, "logo-box"));
    return link;
  }

  function decoratePill(pill) {
    if (pill.dataset.linked === "true") return;
    const icon = pill.querySelector(":scope > .vendor-icon");
    const textClone = pill.cloneNode(true);
    textClone.querySelector(":scope > .vendor-icon")?.remove();
    const rawLabel = textClone.textContent.replace(/\s+/g, " ").trim();
    const noteMatch = rawLabel.match(/\s*(\([^()]*\))\s*$/);
    const label = noteMatch ? rawLabel.slice(0, noteMatch.index).trim() : rawLabel;
    const noteText = noteMatch?.[1] || "";
    const key = pill.dataset.vendorKey || matchVendor(label);

    if (!key) {
      console.warn("No official-site mapping for vendor badge:", label);
      return;
    }

    const note = noteText ? document.createElement("span") : null;
    if (note) {
      note.className = "vendor-note";
      note.textContent = noteText;
    }

    if (key === "bridge-stripe") {
      const pair = document.createElement("span");
      pair.className = `${pill.className} vendor-pair-pill`;
      pair.append(makeVendorLink("bridge", "Bridge"), makeVendorLink("stripe", "Stripe"));
      const name = document.createElement("span");
      name.className = "vendor-name";
      name.textContent = label;
      pair.append(name);
      if (note) pair.append(note);
      pill.replaceWith(pair);
      return;
    }

    const link = document.createElement("a");
    link.className = pill.className;
    const officialUrl = pill.dataset.officialUrl;
    link.href = officialUrl || vendors[key].url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = officialUrl ? `查看 ${label} 官方说明` : `访问 ${vendors[key].name} 官网`;
    link.setAttribute("aria-label", officialUrl ? `查看 ${label} 官方说明（新窗口）` : `访问 ${vendors[key].name} 官方网站（新窗口）`);

    if (icon) link.append(createLogo(vendors[key], "logo-box"));
    const name = document.createElement("span");
    name.className = "vendor-name";
    name.textContent = label;
    link.append(name);
    if (note) link.append(note);
    pill.replaceWith(link);
  }

  function decorateHeaders() {
    const grid = document.querySelector("#poster-canvas .grid");
    if (!grid) return;

    ["bybit", "bitget", "etherfi", "kast"].forEach((key, index) => {
      const cell = grid.children[index + 1];
      const identity = cell && Array.from(cell.children).find((node) =>
        node.classList.contains("flex") && node.classList.contains("items-center")
      );
      if (!identity || identity.dataset.linked === "true") return;

      const link = document.createElement("a");
      link.className = "vendor-heading-link";
      link.href = vendors[key].url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.title = `访问 ${vendors[key].name} 官网`;
      link.setAttribute("aria-label", `访问 ${vendors[key].name} 官方网站（新窗口）`);

      const oldLogo = identity.querySelector("div.w-9");
      if (oldLogo) oldLogo.replaceWith(createLogo(vendors[key], "header-logo-box"));
      while (identity.firstChild) link.append(identity.firstChild);
      link.dataset.linked = "true";
      identity.replaceWith(link);
    });
  }

  function toggleIconMode() {
    const enabled = document.body.classList.toggle("icon-only");
    const button = document.getElementById("toggle-mode-btn");
    if (!button) return;
    button.setAttribute("aria-pressed", String(enabled));
    button.textContent = enabled ? "名称 + Logo 模式" : "纯 Logo 模式";
  }

  window.toggleIconMode = toggleIconMode;
  document.querySelectorAll(".vendor-pill").forEach(decoratePill);
  decorateHeaders();
})();
