import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sliders,
  Ruler,
  Compass,
  Layers,
  Sparkles,
  MoveRight,
  Check,
  ChevronRight,
  Maximize2,
  Box,
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
  ArrowLeft,
  Clock,
  Layers3,
  Flame,
  Building,
  LayoutGrid,
  List
} from 'lucide-react';

// Dedicated Services Data Dictionary for sub-page rendering
export const dedicatedServicesData = {
  'exhibition-stands': {
    id: 'exhibition-stands',
    slug: 'exhibition-stands',
    hash: '#service-exhibition-stands',
    num: '01',
    title: 'EXHIBITION STAND FABRICATION',
    seoTitle: 'Exhibition Stand Fabrication Dubai & UAE | Pioneer Carpentry',
    metaDesc: 'Turnkey exhibition stand fabrication across premier UAE exhibition centers by Pioneer Carpentry. Custom joinery, double-deck stands, and venue installation.',
    category: 'Exhibitions & Pavilions',
    eyebrow: '01 / EXHIBITION STANDS',
    tagline: 'BUILT TO OWN THE FLOOR.',
    description: 'Custom exhibition stands fabricated around design geometry, venue requirements and brand experience — from structural timber framework and CNC joinery to automotive-grade paint finishes and 24/7 venue installation.',
    image: '/images/hero-main.jpg',
    secondaryImage: '/images/craft-finish-detail.jpg',
    heroStandImage: '/images/services-hero-stand.jpg',
    specs: [
      { label: 'VENUE COMPLIANCE', val: 'ALL MAJOR UAE VENUES ACCREDITED' },
      { label: 'PRODUCTION FACILITY', val: 'IN-HOUSE SHARJAH CNC & SPRAY BOOTH' },
      { label: 'STRUCTURAL CAPABILITY', val: 'MULTI-LEVEL DOUBLE-DECK & RIGGED SPANS' },
      { label: 'HANDOVER SPEED', val: 'RAPID 12H TO 24H VENUE FLOOR BUILD' },
    ],
    capabilities: [
      'Bespoke double-deck pavilions with certified structural load engineering',
      'CNC precision routed fluted hardwood ribs and curved architectural fascias',
      'Embedded warm 3000K linear LED illumination channels',
      'Modular breakdown strategy enabling rapid venue assembly and strike-down',
      'VIP lounge execution with integrated reception counters and bar units'
    ],
    materials: 'Grade-A European Timber, Fire-Rated MDF (Class 1), Anodized Aluminum, Burnished Copper, Automotive Lacquer',
  },
  'custom-stages': {
    id: 'custom-stages',
    slug: 'custom-stages',
    hash: '#service-custom-stages',
    num: '02',
    title: 'CUSTOM STAGE FABRICATION',
    seoTitle: 'Custom Stage Fabrication UAE | Pioneer Carpentry',
    metaDesc: 'Engineered keynote event stage fabrication in Dubai & Abu Dhabi. Plenary platforms, curved podiums, and load-tested corporate staging.',
    category: 'Events & Scenography',
    eyebrow: '02 / STAGING',
    tagline: 'BUILT FOR THE MOMENT.',
    description: 'Custom stages engineered and fabricated around event sightlines, audience capacity and technical AV needs. Plenary platforms, keynote podiums, and curved presentation setups built with high structural stability.',
    image: '/images/project-stage-keynote.jpg',
    secondaryImage: '/images/service-stage.jpg',
    heroStandImage: '/images/project-stage-keynote.jpg',
    specs: [
      { label: 'LOAD RATING', val: '500 KG/M² CERTIFIED STAGE PLATFORMS' },
      { label: 'SURFACE FINISH', val: 'ANTI-REFLECTIVE MATTE & NON-SLIP DECKING' },
      { label: 'CABLE MANAGEMENT', val: 'CONCEALED UNDER-DECK AV CHASEWAYS' },
      { label: 'LIGHTING INTEGRATION', val: 'RECESSED PERIMETER LED STRIPS' },
    ],
    capabilities: [
      'Plenary conference stages with curved multi-tier presentation decks',
      'Integrated LED screen surrounds and seamless bezel framing',
      'Bespoke speaker lecterns with concealed microphone routing and monitor mounts',
      'VIP access ramps and concealed technician control step-offs'
    ],
    materials: 'Steel Truss Framing, Heavy-Duty Birch Decking, Anti-Reflective Vinyl, Brushed Brass Trims',
  },
  'event-backdrops': {
    id: 'event-backdrops',
    slug: 'event-backdrops',
    hash: '#service-event-backdrops',
    num: '03',
    title: 'EVENT BACKDROP PRODUCTION',
    seoTitle: 'Event Backdrop Production UAE | Pioneer Carpentry',
    metaDesc: 'Architectural media walls and event backdrops in Dubai & Sharjah. 3D geometric paneling, branded backdrops, and seamless fabric walls.',
    category: 'Media Walls & Backdrops',
    eyebrow: '03 / BACKDROPS',
    tagline: 'SEAMLESS BRAND SCENOGRAPHY.',
    description: 'Architectural backdrops and branded media walls produced for corporate summits, award galas, media press conferences, and brand launches with precision alignment and zero light bleed.',
    image: '/images/service-stage.jpg',
    secondaryImage: '/images/cta-lighting.jpg',
    heroStandImage: '/images/service-stage.jpg',
    specs: [
      { label: 'ALIGNMENT', val: 'ZERO-SEAM MICROMETER GAP JOINTS' },
      { label: 'LIGHT BLEED', val: '100% OPAQUE BLOCKOUT BACKING' },
      { label: 'BRANDING', val: '3D LASER-CUT ACRYLIC & METALLIC INLAYS' },
      { label: 'MODULARITY', val: 'FAST RIGID LOCKING SYSTEM' },
    ],
    capabilities: [
      '3D geometric acoustic paneling with embedded LED accent strips',
      'Seamless tension fabric media walls with rigid timber perimeters',
      'Dimensional laser-cut brass and copper corporate logos',
      'Integrated green room partition walls and backstage masking'
    ],
    materials: 'CNC-Milled Plywood, Micro-rib Acoustic Slats, Blockout Tension Fabric, Metallic Laminates',
  },
  'kiosks-displays': {
    id: 'kiosks-displays',
    slug: 'kiosks-displays',
    hash: '#service-kiosks-displays',
    num: '04',
    title: 'KIOSKS & DISPLAY COUNTERS',
    seoTitle: 'Kiosk & Display Counter Fabrication UAE | Pioneer Carpentry',
    metaDesc: 'Luxury retail kiosk and reception counter fabrication in Dubai & Sharjah. Custom mall pop-ups, display vitrines, and branded islands.',
    category: 'Commercial & Retail Modules',
    eyebrow: '04 / KIOSKS & COUNTERS',
    tagline: 'FUNCTION MEETS FORM.',
    description: 'Purpose-built kiosks, reception counters, product display vitrines, and branded presentation islands engineered for visual impact, ergonomic workflow, and everyday commercial durability.',
    image: '/images/kiosk-luxury.jpg',
    secondaryImage: '/images/craft-finish-detail.jpg',
    heroStandImage: '/images/kiosk-luxury.jpg',
    specs: [
      { label: 'HARDWARE', val: 'BLUM SOFT-CLOSE & LOCKABLE STORAGE' },
      { label: 'SURFACES', val: 'HIGH-PRESSURE LAMINATE & SOLID SURFACE' },
      { label: 'LIGHTING', val: 'WARM 3000K DISPLAY SPOTLIGHTS & STRIPS' },
      { label: 'MOBILITY', val: 'CONCEALED HEAVY-DUTY CASTOR WHEELS' },
    ],
    capabilities: [
      'Luxury mall pop-up kiosks with integrated POS, power, and security shutters',
      'Curved reception desks with burnished copper kickplates and flush LED channels',
      'High-clarity glass display counters with lockable storage drawers',
      'Custom coffee bars and hospitality counters with waterproof internal cavities'
    ],
    materials: 'High-Density MDF, Corian / Solid Surface, Ultra-Clear Tempered Glass, Brushed Copper Sheets',
  },
  'brand-activations': {
    id: 'brand-activations',
    slug: 'brand-activations',
    hash: '#service-brand-activations',
    num: '05',
    title: 'BRAND ACTIVATION STRUCTURES',
    seoTitle: 'Brand Activation Fabrication UAE | Pioneer Carpentry',
    metaDesc: 'Experiential brand activation structures in Dubai & Abu Dhabi. Immersive tunnels, pop-up installations, and interactive brand environments.',
    category: 'Experiential Environments',
    eyebrow: '05 / ACTIVATIONS',
    tagline: 'TURNING BRANDS INTO PLACES.',
    description: 'Custom physical environments designed to turn marketing campaigns into immersive spaces audiences can enter, explore and share across digital media.',
    image: '/images/project-brand-activation.jpg',
    secondaryImage: '/images/hero-pavilion.jpg',
    heroStandImage: '/images/project-brand-activation.jpg',
    specs: [
      { label: 'FOOTFALL RATING', val: 'ENGINEERED FOR HIGH TRAFFIC VOLUME' },
      { label: 'INTERACTIVITY', val: 'INTEGRATED SENSOR & AV HOUSINGS' },
      { label: 'RE-USABILITY', val: 'MODULAR DEMOUNTABLE CHASSIS' },
      { label: 'SAFETY', val: 'CIVIL DEFENSE FIRE & STABILITY APPROVED' },
    ],
    capabilities: [
      'Immersive walk-through tunnels with dynamic lighting pathways',
      'Photo-opportunity installations and 3D experiential brand cubes',
      'Outdoor activation pods with weatherproof cladding and shade structures',
      'Interactive product testing bays with hidden wiring raceways'
    ],
    materials: 'Steel Skeleton Frame, CNC Timber Ribs, Acrylic LED Enclosures, Hardwearing Decking',
  },
  'corporate-event-setups': {
    id: 'corporate-event-setups',
    slug: 'corporate-event-setups',
    hash: '#service-corporate-event-setups',
    num: '06',
    title: 'CORPORATE EVENT SETUPS',
    seoTitle: 'Corporate Event Staging & Setup UAE | Pioneer Carpentry',
    metaDesc: 'Turnkey corporate event setup and scenic fabrication in UAE. Gala setups, summit environments, and VIP lounges by Pioneer Carpentry.',
    category: 'Corporate Environments',
    eyebrow: '06 / CORPORATE SETUPS',
    tagline: 'EXECUTIVE PRECISION.',
    description: 'Physical environments supporting corporate presentations, annual summits, press conferences, and VIP lounges — produced with strict adherence to executive brand standards.',
    image: '/images/hero-main.jpg',
    secondaryImage: '/images/project-stage-keynote.jpg',
    heroStandImage: '/images/hero-main.jpg',
    specs: [
      { label: 'BUILD SCHEDULE', val: '24/7 OVERNIGHT VENUE STAGING' },
      { label: 'FINISH LEVEL', val: '5% ULTRA-MATTE ZERO ORANGE PEEL' },
      { label: 'ACOUSTICS', val: 'INTEGRATED SOUND-DAMPENING BAFFLES' },
      { label: 'DISCRETION', val: 'FULLY ACCREDITED UAE CREWS' },
    ],
    capabilities: [
      'Executive conference staging with hidden AV control booths',
      'VIP lounge enclosures with custom timber slatted partitioning',
      'Branded entryway portals and registration counter setups',
      'Gala dinner presentation plinths and scenic backdrops'
    ],
    materials: 'Birch Plywood, Polyurethane Paint, Acoustic Felt, Brushed Anodized Aluminum',
  },
  'conference-seminar-stages': {
    id: 'conference-seminar-stages',
    slug: 'conference-seminar-stages',
    hash: '#service-conference-seminar-stages',
    num: '07',
    title: 'CONFERENCE & SEMINAR STAGES',
    seoTitle: 'Conference & Seminar Stage Fabrication UAE | Pioneer Carpentry',
    metaDesc: 'Professional conference stage setups across premier UAE venues. Multi-screen stages, panelist podiums, and media infrastructure.',
    category: 'Conference Staging',
    eyebrow: '07 / CONFERENCE STAGES',
    tagline: 'ENGAGING PRESENTATION ENVIRONMENTS.',
    description: 'Professional stage environments integrating multi-screen presentation displays, panelist seating areas, branded lecterns, and technical AV infrastructure for high-profile summits.',
    image: '/images/service-stage.jpg',
    secondaryImage: '/images/project-stage-keynote.jpg',
    heroStandImage: '/images/service-stage.jpg',
    specs: [
      { label: 'SCREEN INTEGRATION', val: 'FLUSH LED & PROJECTION BEZELS' },
      { label: 'LECTERNS', val: 'ERGONOMIC BESPOKE PODIUMS' },
      { label: 'ACCESSIBILITY', val: 'CODE-COMPLIANT ADA STAGE RAMPS' },
      { label: 'TIMELINE', val: 'RAPID OVERNIGHT INSTALLATION' },
    ],
    capabilities: [
      'Multi-speaker stage platforms with integrated confidence monitor wells',
      'Custom lecterns with integrated logo branding and cable chases',
      'Panelist discussion platforms with flush power and mic outlets',
      'Acoustic backdrop fins framing ultra-wide LED video walls'
    ],
    materials: 'High-Grade Timber Framing, Sound Baffles, Non-Glow Vinyl, Anodized Metals',
  },
  'product-launch-installations': {
    id: 'product-launch-installations',
    slug: 'product-launch-installations',
    hash: '#service-product-launch-installations',
    num: '08',
    title: 'PRODUCT LAUNCH INSTALLATIONS',
    seoTitle: 'Product Launch Fabrication UAE | Pioneer Carpentry',
    metaDesc: 'Bespoke product launch environments in Dubai & Abu Dhabi. Automotive reveal stages, product plinths, and luxury launch vitrines.',
    category: 'Product Reveals',
    eyebrow: '08 / PRODUCT LAUNCHES',
    tagline: 'THE ART OF THE REVEAL.',
    description: 'Purpose-built launch environments integrating displays, presentation surfaces, motorized turntables, and branded architectural elements for high-impact unveilings.',
    image: '/images/hero-pavilion.jpg',
    secondaryImage: '/images/project-brand-activation.jpg',
    heroStandImage: '/images/hero-pavilion.jpg',
    specs: [
      { label: 'TURNTABLE LOAD', val: 'AUTOMOTIVE RATED UP TO 4,000 KG' },
      { label: 'SURFACE LACQUER', val: 'HIGH-GLOSS OR ZERO-GLARE MATTE' },
      { label: 'EFFECTS INTEGRATION', val: 'RECESSED FOG & LIGHTING CHANNELS' },
      { label: 'PRECISION', val: 'MUSEUM-GRADE ILLUMINATION FOCUS' },
    ],
    capabilities: [
      'Automotive reveal plinths with integrated turntable flush decks',
      'Luxury jewelry and watch launch vitrines with micro-spotlighting',
      'Kinetic reveal chambers with concealed mechanical drops',
      'VIP guest launch tunnels with dramatic lighting sequences'
    ],
    materials: 'Reinforced Steel Chassis, Automotive Spray Lacquer, Tempered Glass, Warm LED Strips',
  },
  'custom-props-decorative': {
    id: 'custom-props-decorative',
    slug: 'custom-props-decorative',
    hash: '#service-custom-props-decorative',
    num: '09',
    title: 'CUSTOM PROPS & DECORATIVE ELEMENTS',
    seoTitle: 'Custom Props & Dimensional Fabrication UAE | Pioneer Carpentry',
    metaDesc: 'Bespoke prop fabrication and 3D decorative structures in UAE. Oversized letters, sculptural elements, and thematic builds.',
    category: 'Scenic & Dimensional Arts',
    eyebrow: '09 / CUSTOM PROPS',
    tagline: 'DIMENSIONAL CRAFTSMANSHIP.',
    description: 'Bespoke dimensional elements, oversized 3D logos, sculptural replicas, and thematic props produced to support creative concepts and branded experiences across the UAE.',
    image: '/images/service-custom.jpg',
    secondaryImage: '/images/craft-finish-detail.jpg',
    heroStandImage: '/images/service-custom.jpg',
    specs: [
      { label: 'MACHINING', val: '5-AXIS CNC FOAM & TIMBER ROUTING' },
      { label: 'FINISHES', val: 'HAND-METALLIZED, CONCRETE, GOLD LEAF' },
      { label: 'RIGIDITY', val: 'INTERNAL STEEL SKELETON REINFORCEMENT' },
      { label: 'WEATHERPROOF', val: 'UV & HUMIDITY PROTECTED COATINGS' },
    ],
    capabilities: [
      'Oversized 3D freestanding brand letters and illuminated monograms',
      'Sculptural architectural arches and thematic entryway motifs',
      'Hand-finished metallized props featuring oxidized copper and brass patinas',
      'Custom decorative wall reliefs and acoustic carved panels'
    ],
    materials: 'High-Density EPS Foam, Hardwood, Fiberglass Resin, Metallic Coatings',
  },
  'led-screen-structures': {
    id: 'led-screen-structures',
    slug: 'led-screen-structures',
    hash: '#service-led-screen-structures',
    num: '10',
    title: 'LED SCREEN STRUCTURES & CLADDING',
    seoTitle: 'LED Screen Cladding & Structure Fabrication UAE | Pioneer Carpentry',
    metaDesc: 'Custom LED screen cladding and surround fabrication in Dubai & Abu Dhabi. Recessed video wall framing and thermal access doors.',
    category: 'Technical Enclosures',
    eyebrow: '10 / LED CLADDING',
    tagline: 'WHAT YOU DON\'T SEE MATTERS TOO.',
    description: 'Purpose-built surrounds, supports and architectural cladding for LED video displays integrated cleanly into event and exhibition environments without visible seams.',
    image: '/images/services-tech-framing.jpg',
    secondaryImage: '/images/cta-lighting.jpg',
    heroStandImage: '/images/services-tech-framing.jpg',
    specs: [
      { label: 'BEZEL FIT', val: 'ZERO-SEAM MICROMETER FLUSH EDGE' },
      { label: 'VENTILATION', val: 'CONCEALED THERMAL CONVECTION VENTS' },
      { label: 'MAINTENANCE', val: 'INTEGRATED REAR SERVICE ACCESS DOORS' },
      { label: 'RIGGING INTEGRATION', val: 'TÜV CERTIFIED LOAD MOUNTS' },
    ],
    capabilities: [
      'Recessed video wall framing with flush acrylic or timber fascias',
      'Curved LED screen surrounds for 180-degree panoramic displays',
      'Concealed cable raceways and driver enclosure boxes',
      'Architectural header spans disguising heavy hanging LED trusses'
    ],
    materials: 'Aluminum Sub-Chassis, Class 1 Fire Board, Polyurethane Matte Paint, Thermal Mesh',
  },
  'truss-lighting-support': {
    id: 'truss-lighting-support',
    slug: 'truss-lighting-support',
    hash: '#service-truss-lighting-support',
    num: '11',
    title: 'TRUSS & LIGHTING SUPPORT STRUCTURES',
    seoTitle: 'Truss Cladding & Lighting Support Structures UAE | Pioneer Carpentry',
    metaDesc: 'Fabrication-clad lighting totems and ground support truss enclosures in UAE. TÜV-compliant disguised overhead rigging.',
    category: 'Structural Integration',
    eyebrow: '11 / TRUSS STRUCTURES',
    tagline: 'DISGUISED POWER.',
    description: 'Support structures coordinated around lighting, AV and venue load requirements while maintaining visual integrity through bespoke cladding and architectural concealment.',
    image: '/images/cta-lighting.jpg',
    secondaryImage: '/images/services-tech-framing.jpg',
    heroStandImage: '/images/cta-lighting.jpg',
    specs: [
      { label: 'STRUCTURAL TESTING', val: 'ENGINEER-STAMPED LOAD CALCULATIONS' },
      { label: 'CLADDING', val: 'MATTE BLACK OR BESPOKE BRANDED SKINS' },
      { label: 'BALLAST', val: 'CONCEALED HEAVY-DUTY BASE PLATES' },
      { label: 'SAFETY', val: 'SECONDARY SAFETY WIRE ANCHORS' },
    ],
    capabilities: [
      'Clad lighting totems disguising aluminum ground support towers',
      'Architectural overhead header spans concealing heavy rigging cables',
      'Custom projector housings with vibration-dampened mounts',
      'Integrated spotlight recesses within decorative ceiling beams'
    ],
    materials: 'Extruded Aluminum Truss, Steel Base Plates, Fire-Rated Timber Shells, Anodized Metals',
  },
  'custom-furniture-production': {
    id: 'custom-furniture-production',
    slug: 'custom-furniture-production',
    hash: '#service-custom-furniture-production',
    num: '12',
    title: 'CUSTOM FURNITURE PRODUCTION',
    seoTitle: 'Custom Furniture Fabrication UAE | Pioneer Carpentry',
    metaDesc: 'Bespoke event and exhibition furniture production in Dubai & Sharjah. Custom reception counters, conference tables, and VIP banquettes.',
    category: 'Architectural Joinery',
    eyebrow: '12 / CUSTOM FURNITURE',
    tagline: 'MADE FOR THE SPACE.',
    description: 'Bespoke counters, desks, display furniture, seating elements and integrated joinery produced specifically for exhibition, event and branded environments.',
    image: '/images/craft-finish-detail.jpg',
    secondaryImage: '/images/trans-03-experience.jpg',
    heroStandImage: '/images/craft-finish-detail.jpg',
    specs: [
      { label: 'WOODWORKING', val: 'HAND-FITTED HARDWOOD VENEERS & SLATS' },
      { label: 'HARDWARE', val: 'CONCEALED WIRE TRAYS & SOFT-CLOSE HARDWARE' },
      { label: 'DURABILITY', val: 'HIGH-IMPACT RESISTANT EDGING' },
      { label: 'FINISH', val: '5% ULTRA-MATTE POLYURETHANE CLEAR COAT' },
    ],
    capabilities: [
      'Bespoke conference tables with integrated pop-up power and HDMI modules',
      'Curved VIP lounge banquettes upholstered in premium commercial fabrics',
      'Branded coffee bars and hospitality counters with hidden refrigeration',
      'Executive podiums and press conference console desks'
    ],
    materials: 'Oak Veneer, American Walnut, Corian, Brushed Metallic Inlays, Blum Hardware',
  },
  'onsite-installation-finishing': {
    id: 'onsite-installation-finishing',
    slug: 'onsite-installation-finishing',
    hash: '#service-onsite-installation-finishing',
    num: '13',
    title: 'ON-SITE INSTALLATION & FINISHING',
    seoTitle: 'On-Site Exhibition & Event Installation UAE | Pioneer Carpentry',
    metaDesc: '24/7 venue floor installation and micro-finishing services across premier UAE venues by Pioneer Carpentry.',
    category: 'Site Operations & Handover',
    eyebrow: '13 / SITE EXECUTION',
    tagline: 'THE FINAL MILLIMETER MATTERS.',
    description: 'Our fabrication process continues onto the venue floor, where structures are assembled, aligned, micro-finished and prepared for final handover.',
    image: '/images/trans-02-workshop.jpg',
    secondaryImage: '/images/hero-main.jpg',
    heroStandImage: '/images/trans-02-workshop.jpg',
    specs: [
      { label: 'CREW ACCREDITATION', val: 'FULLY ACCREDITED UAE VENUE CREWS' },
      { label: 'ALIGNMENT', val: '360° LASER LEVEL MATCHING' },
      { label: 'TOUCH-UP', val: 'ON-SITE MICRO SPRAY & BUFFING' },
      { label: 'STANDBY', val: 'DEDICATED 24/7 VENUE MAINTENANCE TEAM' },
    ],
    capabilities: [
      'Laser-level positioning ensuring perfect flush alignment across large platforms',
      'Cam-lock modular coupling for silent, dust-free venue floor assembly',
      'On-site micro-touchups resolving transit scratches before opening hours',
      'Full electrical, LED, and AV commissioning ahead of VIP walkthrough'
    ],
    materials: 'Laser Aligners, Cam-Lock Systems, Touch-Up Paint Kits, Clean-Room Vacuum Equipment',
  }
};

// Map category aliases to specific slugs for easy hash routing
const categoryAliasMap = {
  'exhibitions': 'exhibition-stands',
  'events': 'custom-stages',
  'activations': 'brand-activations',
  'technical': 'led-screen-structures',
  'joinery': 'custom-furniture-production',
  'site-execution': 'onsite-installation-finishing'
};

export default function ServicesPage({ onOpenQuote, onNavigate }) {
  // Directory services list for Section 03
  const directoryServices = [
    {
      num: '01',
      title: 'EXHIBITION STAND FABRICATION',
      slug: 'exhibition-stands',
      hash: '#service-exhibition-stands',
      category: 'Exhibitions & Pavilions',
      group: 'exhibitions',
      desc: 'Turnkey double-deck stands, bespoke island pavilions, and venue-compliant joinery.',
      image: '/service/1.png',
      meta: 'FULL VENUE COMPLIANCE • CNC JOINERY • RAPID HANDOVER'
    },
    {
      num: '02',
      title: 'CUSTOM STAGE FABRICATION',
      slug: 'custom-stages',
      hash: '#service-custom-stages',
      category: 'Events & Scenography',
      group: 'staging',
      desc: 'Engineered keynote platforms, plenary stages, and custom curved audience sightlines.',
      image: '/service/2.png',
      meta: 'LOAD-CALCULATED • INTEGRATED ACCESS • NON-SLIP FINISH'
    },
    {
      num: '03',
      title: 'EVENT BACKDROP PRODUCTION',
      slug: 'event-backdrops',
      hash: '#service-event-backdrops',
      category: 'Media Walls & Backdrops',
      group: 'staging',
      desc: 'Architectural media walls, 3D geometric acoustic paneling, and seamless fabric tensioning.',
      image: '/service/3.png',
      meta: 'ZERO LIGHT BLEED • SEAMLESS BRANDING • RIGID ALIGNMENT'
    },
    {
      num: '04',
      title: 'KIOSKS & DISPLAY COUNTERS',
      slug: 'kiosks-displays',
      hash: '#service-kiosks-displays',
      category: 'Commercial & Retail Modules',
      group: 'commercial',
      desc: 'Luxury mall kiosks, reception desks, VIP bar counters, and experiential display islands.',
      image: '/service/4.png',
      meta: 'CONCEALED STORAGE • WARM ACCENT LED • REINFORCED CHASSIS'
    },
    {
      num: '05',
      title: 'BRAND ACTIVATION STRUCTURES',
      slug: 'brand-activations',
      hash: '#service-brand-activations',
      category: 'Experiential Environments',
      group: 'exhibitions',
      desc: 'Immersive walk-through tunnels, photo opportunity installations, and sensory brand cubes.',
      image: '/service/5.png',
      meta: 'HIGH-TRAFFIC RESILIENT • INTERACTIVE AV READY • MODULAR'
    },
    {
      num: '06',
      title: 'CORPORATE EVENT SETUPS',
      slug: 'corporate-event-setups',
      hash: '#service-corporate-event-setups',
      category: 'Corporate Environments',
      group: 'staging',
      desc: 'Boardroom staging, gala dinner installations, annual summit scenic fabrications, and VIP lounges.',
      image: '/service/6.png',
      meta: 'EXECUTIVE FINISH • CONCEALED WIRING • 24/7 OVERNIGHT BUILD'
    },
    {
      num: '07',
      title: 'CONFERENCE & SEMINAR STAGES',
      slug: 'conference-seminar-stages',
      hash: '#service-conference-seminar-stages',
      category: 'Conference Staging',
      group: 'staging',
      desc: 'Multi-screen presentation stages, panelist podiums, lecterns, and acoustic baffles.',
      image: '/service/7.png',
      meta: 'AV INTEGRATION • FLUSH MONITOR MOUNT • ERGONOMIC PODIUMS'
    },
    {
      num: '08',
      title: 'PRODUCT LAUNCH INSTALLATIONS',
      slug: 'product-launch-installations',
      hash: '#service-product-launch-installations',
      category: 'Product Reveals',
      group: 'exhibitions',
      desc: 'Automotive turntable surrounds, luxury vitrines, kinetic reveal stages, and illuminated plinths.',
      image: '/service/8.png',
      meta: 'HIGH-LOAD CAPABILITY • DRAMATIC LIGHTING READY • BESPOKE'
    },
    {
      num: '09',
      title: 'CUSTOM PROPS & DECORATIVE ELEMENTS',
      slug: 'custom-props-decorative',
      hash: '#service-custom-props-decorative',
      category: 'Scenic & Dimensional Arts',
      group: 'commercial',
      desc: 'Oversized dimensional branding, thematic sculptural replicas, architectural archways, and motifs.',
      image: '/service/9.png',
      meta: 'FIBERGLASS / TIMBER / METAL • PRECISION SCALED • WEATHERPROOF'
    },
    {
      num: '10',
      title: 'LED SCREEN STRUCTURES & CLADDING',
      slug: 'led-screen-structures',
      hash: '#service-led-screen-structures',
      category: 'Technical Enclosures',
      group: 'commercial',
      desc: 'Precision bezels, curved LED cabinet surrounds, recessed video walls, and maintenance access doors.',
      image: '/service/10.png',
      meta: 'HEAT DISSIPATION VENTS • ZERO SEAM GAP • FLUSH REVEALS'
    },
    {
      num: '11',
      title: 'TRUSS & LIGHTING SUPPORT STRUCTURES',
      slug: 'truss-lighting-support',
      hash: '#service-truss-lighting-support',
      category: 'Structural Integration',
      group: 'joinery',
      desc: 'Fabrication-clad lighting totems, hidden ground support towers, and architectural header spans.',
      image: '/service/11.png',
      meta: 'TÜV CERTIFIED FASTENERS • CONCEALED BALLAST • MATTE CLADDING'
    },
    {
      num: '12',
      title: 'CUSTOM FURNITURE PRODUCTION',
      slug: 'custom-furniture-production',
      hash: '#service-custom-furniture-production',
      category: 'Architectural Joinery',
      group: 'joinery',
      desc: 'Bespoke conference tables, VIP curved banquette seating, branded coffee bars, and console desks.',
      image: '/service/12.png',
      meta: 'HARDWOOD & VENEER • WIRE MANAGEMENT • LUXURY HPL'
    },
    {
      num: '13',
      title: 'ON-SITE INSTALLATION & FINISHING',
      slug: 'onsite-installation-finishing',
      hash: '#service-onsite-installation-finishing',
      category: 'Site Operations & Handover',
      group: 'joinery',
      desc: 'Laser-level assembly, seamless lacquer micro-touchups, lighting commissioning, and 24/7 handover.',
      image: '/service/13.png',
      meta: 'ACCREDITED VENUE CREWS • CLEAN-ROOM HANDOVER • STANDBY TEAM'
    },
  ];

  // Dedicated service pages are blocked for now
  const [activeSlug, setActiveSlug] = useState(null);

  useEffect(() => {
    // Keep overview index active and prevent sub-page routing
    if (window.location.hash.startsWith('#service-')) {
      window.history.replaceState(null, '', '#service-directory');
    }
    setActiveSlug(null);
  }, []);

  // Update title & SEO metadata when sub-page changes
  useEffect(() => {
    if (activeSlug && dedicatedServicesData[activeSlug]) {
      const detail = dedicatedServicesData[activeSlug];
      document.title = detail.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', detail.metaDesc);
      }
    } else {
      document.title = 'Exhibition & Event Fabrication Services UAE | Pioneer Carpentry';
    }
  }, [activeSlug]);

  // Section 03: Service Directory category filter & view mode
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filterCategories = [
    { id: 'all', label: 'ALL SERVICES', count: directoryServices.length },
    { id: 'exhibitions', label: 'EXHIBITIONS & ACTIVATIONS', count: directoryServices.filter((s) => s.group === 'exhibitions').length },
    { id: 'staging', label: 'STAGES & BACKDROPS', count: directoryServices.filter((s) => s.group === 'staging').length },
    { id: 'commercial', label: 'KIOSKS & DISPLAYS', count: directoryServices.filter((s) => s.group === 'commercial').length },
    { id: 'joinery', label: 'JOINERY & INSTALLATION', count: directoryServices.filter((s) => s.group === 'joinery').length },
  ];

  const displayedServices = activeCategory === 'all'
    ? directoryServices
    : directoryServices.filter((s) => s.group === activeCategory);




  // Helper to open a specific service dedicated URL page
  const navigateToServiceSlug = (slug) => {
    window.location.hash = `service-${slug}`;
    setActiveSlug(slug);
    window.scrollTo(0, 0);
  };

  // Helper to back out to main services overview
  const returnToServicesIndex = () => {
    window.location.hash = 'services';
    setActiveSlug(null);
    window.scrollTo(0, 0);
  };

  // Structured Data Schema for SEO
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: activeSlug && dedicatedServicesData[activeSlug]
      ? dedicatedServicesData[activeSlug].title
      : 'Exhibition & Event Fabrication Services UAE',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pioneer Carpentry',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Warehouse 1, Sheikh Khalifa Bin Zayed Al Nahyan Rd, Industrial Area 4',
        addressLocality: 'Sharjah',
        addressCountry: 'AE'
      },
      telephone: '+971 6 525 9878',
      email: 'Charles@pioneerexhibition.ae'
    },
    areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'United Arab Emirates'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pioneer Fabrication Capabilities',
      itemListElement: directoryServices.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.shortDesc
        }
      }))
    }
  };

  // =========================================================================
  // IF A DEDICATED SERVICE SUB-PAGE IS ACTIVE (e.g. #service-exhibition-stands)
  // =========================================================================
  if (activeSlug && dedicatedServicesData[activeSlug]) {
    const detail = dedicatedServicesData[activeSlug];
    const currentIndex = directoryServices.findIndex((s) => s.slug === activeSlug);
    const prevService = directoryServices[currentIndex > 0 ? currentIndex - 1 : directoryServices.length - 1];
    const nextService = directoryServices[currentIndex < directoryServices.length - 1 ? currentIndex + 1 : 0];

    return (
      <div className="w-full bg-[#FAF8F5] text-charcoal font-sans selection:bg-copper selection:text-white pt-24 pb-16">
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />

        {/* Top Sticky Breadcrumb Bar */}
        <div className="bg-[#FAF8F5] border-b border-ivory-border py-4 mb-8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
            <button
              onClick={returnToServicesIndex}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-charcoal hover:text-copper transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-copper" />
              <span>BACK TO ALL SERVICES INDEX</span>
            </button>

            <div className="text-[11px] font-mono tracking-widest text-warmgrey hidden sm:block uppercase">
              SERVICE {detail.num} // {detail.category}
            </div>
          </div>
        </div>

        {/* Dedicated Service Hero Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Columns: Header, Title, Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-copper inline-block" />
                <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                  {detail.eyebrow}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-charcoal leading-[0.95]">
                {detail.title}
              </h1>

              <div className="text-lg sm:text-xl font-display uppercase tracking-wider text-copper font-bold">
                {detail.tagline}
              </div>

              <p className="text-base sm:text-xl text-charcoal/85 font-light leading-relaxed">
                {detail.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-copper hover:bg-copper-hover text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm inline-flex items-center gap-3 cursor-pointer group"
                >
                  <span>REQUEST QUOTE FOR {detail.title.split(' ')[0]}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <a
                  href="tel:+97165259878"
                  className="px-6 py-4 border border-charcoal/30 hover:border-copper hover:text-copper text-charcoal text-xs font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-copper" />
                  <span>+971 6 525 9878</span>
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Large Architectural Hero Photograph */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden border border-charcoal/20 shadow-architectural bg-charcoal">
                <img
                  src={detail.heroStandImage || detail.image}
                  alt={detail.title}
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center filter brightness-[0.98]"
                  loading="eager"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 backdrop-blur-md px-3 py-2 text-[10px] font-mono tracking-widest text-white border border-white/10 flex items-center justify-between">
                  <span>FIG {detail.num}.0 // {detail.category}</span>
                  <span className="text-copper">SHARJAH FABRICATION</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4 Technical Specification Badges */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 bg-ivory-warm border border-ivory-border">
            {detail.specs.map((spec, sIdx) => (
              <div key={sIdx} className="space-y-1.5 border-l-2 border-copper pl-4">
                <span className="text-[10px] font-mono text-copper font-bold tracking-widest uppercase block">
                  {spec.label}
                </span>
                <span className="text-xs sm:text-sm font-mono text-charcoal font-semibold uppercase leading-snug block">
                  {spec.val}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Capabilities & Secondary Showcase Visual */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6 Columns: Key Capabilities List */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-copper font-semibold">
                KEY FABRICATION CAPABILITIES
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight text-charcoal">
                PRECISION SPECIFICATION & FEATURES
              </h2>

              <ul className="space-y-4">
                {detail.capabilities.map((cap, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-3 text-sm sm:text-base text-charcoal/85 font-light leading-relaxed">
                    <Check className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 p-5 bg-white border border-ivory-border space-y-2">
                <span className="text-xs font-mono text-copper font-bold tracking-wider uppercase block">
                  APPROVED MATERIALS & FINISH PALETTE:
                </span>
                <span className="text-xs font-mono text-warmgrey leading-relaxed block">
                  {detail.materials}
                </span>
              </div>
            </div>

            {/* Right 6 Columns: Secondary Feature Visual */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-charcoal/20 shadow-architectural bg-charcoal">
                <img
                  src={detail.secondaryImage || detail.image}
                  alt={`${detail.title} detailed joinery & surface finish`}
                  className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover object-center filter brightness-[0.98]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-charcoal/85 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[10px] font-mono tracking-widest text-white">
                  JOINERY & FINISHING DETAIL
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom Service Sub-Page Navigation Bar */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 border-t border-ivory-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <button
              onClick={() => navigateToServiceSlug(prevService.slug)}
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-charcoal hover:text-copper transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 text-copper transform group-hover:-translate-x-1 transition-transform" />
              <span>PREVIOUS: {prevService.num} {prevService.title}</span>
            </button>

            <button
              onClick={returnToServicesIndex}
              className="px-6 py-2 bg-ivory-warm border border-ivory-border text-xs font-mono uppercase tracking-widest text-charcoal hover:border-copper hover:text-copper transition-colors cursor-pointer"
            >
              ALL 13 SERVICES INDEX
            </button>

            <button
              onClick={() => navigateToServiceSlug(nextService.slug)}
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-charcoal hover:text-copper transition-colors cursor-pointer group"
            >
              <span>NEXT: {nextService.num} {nextService.title}</span>
              <ArrowRight className="w-4 h-4 text-copper transform group-hover:translate-x-1 transition-transform" />
            </button>

          </div>
        </section>
      </div>
    );
  }

  // =========================================================================
  // MAIN SERVICES INDEX PAGE (OVERVIEW, 13 DIRECTORY INDEX & SIGNATURE SECTIONS)
  // =========================================================================
  return (
    <div className="w-full bg-[#FAF8F5] text-charcoal font-sans selection:bg-copper selection:text-white">
      {/* JSON-LD Structured SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* =========================================================================
          01 — SERVICES HERO (85–90vh, Sophisticated Split Composition)
          ========================================================================= */}
      <section
        id="services-hero"
        aria-label="Services Hero - Exhibition and Event Fabrication Services UAE"
        className="min-h-[85vh] lg:min-h-[90vh] bg-[#FAF8F5] pt-24 sm:pt-28 pb-8 flex flex-col justify-between relative overflow-hidden border-b border-ivory-border"
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-ivory pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex items-center my-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-6">
            
            {/* LEFT 55% Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center space-y-6"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3">
                <span className="w-6 sm:w-8 h-[1.5px] bg-copper inline-block" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                  WHAT WE BUILD
                </span>
                <span className="text-[10px] font-mono text-warmgrey/70 hidden sm:inline-block">
                  // UAE FABRICATION STUDIO
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-charcoal leading-[0.92]">
                <span className="sr-only">
                  Exhibition, Event & Custom Fabrication Services UAE - 
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    FABRICATION
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-copper"
                  >
                    WITHOUT
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    LIMITS.
                  </motion.span>
                </span>
              </h1>

              {/* Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl text-charcoal/80 font-light leading-relaxed max-w-xl"
              >
                From exhibition stands and event stages to kiosks, brand activations and custom-built environments, Pioneer Carpentry turns ambitious concepts into physical spaces across the UAE.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#service-directory"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#service-directory')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm group cursor-pointer"
                >
                  <span>DISCOVER OUR 13 SERVICES</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>

                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm group cursor-pointer"
                >
                  <span>REQUEST SPECIFICATION</span>
                  <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT 45% Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[420px] lg:max-w-none group">
                {/* Coordinates */}
                <div className="absolute -top-3 -left-3 text-copper font-mono text-[10px] tracking-widest pointer-events-none select-none">
                  + 25.321°N
                </div>
                <div className="absolute -top-3 -right-3 text-copper font-mono text-[10px] tracking-widest pointer-events-none select-none">
                  + 55.392°E
                </div>
                <div className="absolute -bottom-3 -left-3 text-copper font-mono text-[10px] tracking-widest pointer-events-none select-none">
                  [DATUM 0.00]
                </div>
                <div className="absolute -bottom-3 -right-3 text-copper font-mono text-[10px] tracking-widest pointer-events-none select-none">
                  [TOL ±0.5mm]
                </div>

                <div className="absolute -inset-2 border border-copper/25 pointer-events-none" />
                <div className="absolute -inset-4 border border-dashed border-charcoal/15 pointer-events-none" />

                <div className="hidden xl:flex flex-col justify-between items-center absolute -left-10 top-0 bottom-0 py-6 text-[10px] font-mono tracking-[0.3em] uppercase text-warmgrey select-none">
                  <span className="[writing-mode:vertical-rl] rotate-180">DESIGN</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                  <span className="[writing-mode:vertical-rl] rotate-180">FABRICATION</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                  <span className="[writing-mode:vertical-rl] rotate-180">INSTALLATION</span>
                </div>

                <div className="relative overflow-hidden bg-charcoal border border-charcoal/20 shadow-architectural">
                  <img
                    src="/services/hero.png"
                    alt="Pioneer Carpentry custom exhibition stand fabrication in UAE"
                    className="w-full h-[460px] sm:h-[520px] lg:h-[580px] object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-103"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[10px] font-mono tracking-wider bg-charcoal/80 backdrop-blur-md px-3 py-2 border border-white/10">
                    <span className="text-copper font-semibold">FIG 01.0 // BESPOKE STAND</span>
                    <span className="text-white/70">SHARJAH WORKSHOP</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Info Rail */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 pt-4 border-t border-ivory-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono uppercase tracking-[0.25em] text-charcoal/75">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              <span className="hover:text-copper transition-colors">EXHIBITIONS</span>
              <span className="text-copper/50">/</span>
              <span className="hover:text-copper transition-colors">EVENTS</span>
              <span className="text-copper/50">/</span>
              <span className="hover:text-copper transition-colors">ACTIVATIONS</span>
              <span className="text-copper/50">/</span>
              <span className="hover:text-copper transition-colors">CUSTOM BUILDS</span>
            </div>

            <div className="text-[11px] text-warmgrey tracking-widest hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
              <span>UAE IN-HOUSE PRODUCTION FACILITY</span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          03 — SERVICE DIRECTORY / INDEX (Navigates to Dedicated Service Pages!)
          ========================================================================= */}
      <section
        id="service-directory"
        aria-label="Complete Index of 13 Specialist Fabrication Services"
        className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#141414] text-white relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-grid-charcoal pointer-events-none opacity-30" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Section Header & View Controls */}
          <div className="mb-10 sm:mb-12 border-b border-white/10 pb-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="w-8 h-[1.5px] bg-copper inline-block" />
                  <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                    SPECIALIST FABRICATION INDEX // UAE PRODUCTION HQ
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white leading-[1.02]">
                  13 SERVICES. <br />
                  <span className="text-copper">ONE FABRICATION PARTNER.</span>
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:text-right">
                <div className="text-xs font-mono text-warmgrey tracking-widest max-w-xs">
                  PRECISION JOINERY, STRUCTURAL STEEL & LIVE VENUE INSTALLATION.
                </div>

                {/* View Mode Switcher */}
                <div className="inline-flex items-center bg-[#1E1E1E] p-1 border border-white/15 shrink-0 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid View"
                    className={`px-3 py-1.5 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-copper text-white font-semibold shadow-sm'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>GRID</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('rows')}
                    aria-label="List View"
                    className={`px-3 py-1.5 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${
                      viewMode === 'rows'
                        ? 'bg-copper text-white font-semibold shadow-sm'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <List className="w-3.5 h-3.5" />
                    <span>ROWS</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filter Tabs Bar */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2">
              {filterCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                      isActive
                        ? 'bg-copper border-copper text-white shadow-copper-sm font-semibold'
                        : 'bg-[#1a1a1a] border-white/10 text-white/70 hover:border-copper/40 hover:text-white'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`ml-2 text-[10px] ${isActive ? 'text-white/80' : 'text-copper'}`}>
                      ({cat.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* GRID VIEW: Visible photography on every card */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedServices.map((service, idx) => {
                const isLastSingle = idx === displayedServices.length - 1 && displayedServices.length % 3 === 1;

                if (isLastSingle) {
                  return (
                    <motion.div
                      key={service.num}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="md:col-span-2 lg:col-span-3 group bg-[#1a1a1a] border border-white/10 hover:border-copper/70 transition-all duration-500 overflow-hidden shadow-architectural-dark grid grid-cols-1 md:grid-cols-12 items-stretch relative"
                    >
                      {/* Left Image Column */}
                      <div className="md:col-span-5 lg:col-span-4 relative min-h-[220px] sm:min-h-[260px] overflow-hidden bg-charcoal">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] group-hover:scale-106 group-hover:brightness-95 transition-all duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-[#1a1a1a] opacity-80 pointer-events-none" />

                        <div className="absolute top-3 left-3 z-10 pointer-events-none">
                          <span className="px-2.5 py-1 bg-charcoal/85 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-widest text-copper font-bold shadow-sm">
                            {service.num}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                          <span className="px-2.5 py-1 bg-charcoal/85 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/80">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      {/* Right Content Column */}
                      <div className="md:col-span-7 lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono text-copper uppercase tracking-widest font-semibold">
                            {service.category} // SPECIFICATION {service.num}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-white group-hover:text-copper transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-2xl">
                            {service.desc}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                          <div className="text-[10px] font-mono text-copper tracking-wider uppercase bg-white/[0.03] px-3 py-1.5 border-l-2 border-copper">
                            {service.meta}
                          </div>

                          <button
                            type="button"
                            onClick={onOpenQuote}
                            className="sm:w-auto px-6 py-3 bg-copper hover:bg-copper-hover text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-3 group/btn cursor-pointer shrink-0"
                          >
                            <span>REQUEST QUOTE</span>
                            <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={service.num}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-[#1a1a1a] border border-white/10 hover:border-copper/70 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-architectural-dark relative"
                  >
                    {/* Top Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] group-hover:scale-106 group-hover:brightness-95 transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80 pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                        <span className="px-2.5 py-1 bg-charcoal/85 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-widest text-copper font-bold shadow-sm">
                          {service.num}
                        </span>
                        <span className="px-2.5 py-1 bg-charcoal/85 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/80 truncate max-w-[170px]">
                          {service.category}
                        </span>
                      </div>

                      {/* Bottom Technical Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/70 pointer-events-none z-10">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
                          <span className="uppercase tracking-widest text-white/80">IN-HOUSE FABRICATION</span>
                        </span>
                        <span className="text-copper/90 tracking-wider">TOL ±0.5MM</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        <h3 className="text-lg sm:text-xl font-display font-black uppercase tracking-tight text-white group-hover:text-copper transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                          {service.desc}
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-white/10">
                        {/* Meta technical spec badge */}
                        <div className="text-[10px] font-mono text-copper tracking-wider uppercase bg-white/[0.03] px-3 py-2 border-l-2 border-copper">
                          {service.meta}
                        </div>

                        <button
                          type="button"
                          onClick={onOpenQuote}
                          className="w-full py-3.5 px-4 bg-copper hover:bg-copper-hover text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm flex items-center justify-between group/btn cursor-pointer"
                        >
                          <span>REQUEST QUOTE</span>
                          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* ROWS VIEW: Visible photography side-by-side on every service row */}
          {viewMode === 'rows' && (
            <div className="space-y-6">
              {displayedServices.map((service) => (
                <motion.div
                  key={service.num}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#1a1a1a] border border-white/10 hover:border-copper/70 transition-all duration-500 overflow-hidden shadow-architectural-dark grid grid-cols-1 md:grid-cols-12 items-stretch"
                >
                  {/* Image Column */}
                  <div className="md:col-span-4 lg:col-span-4 relative min-h-[220px] sm:min-h-[260px] overflow-hidden bg-charcoal">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] group-hover:scale-106 group-hover:brightness-95 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-[#1a1a1a] opacity-80 pointer-events-none" />

                    <div className="absolute top-3 left-3 z-10 pointer-events-none">
                      <span className="px-2.5 py-1 bg-charcoal/85 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-widest text-copper font-bold">
                        {service.num}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                      <span className="px-2.5 py-1 bg-charcoal/85 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/80">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="md:col-span-8 lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-copper uppercase tracking-widest font-semibold">
                        {service.category} // SPECIFICATION {service.num}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-white group-hover:text-copper transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-2xl">
                        {service.desc}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                      <div className="text-[10px] font-mono text-copper tracking-wider uppercase bg-white/[0.03] px-3 py-1.5 border-l-2 border-copper">
                        {service.meta}
                      </div>

                      <button
                        type="button"
                        onClick={onOpenQuote}
                        className="sm:w-auto px-6 py-3 bg-copper hover:bg-copper-hover text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-3 group/btn cursor-pointer shrink-0"
                      >
                        <span>REQUEST QUOTE</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>





      {/* =========================================================================
          12 — WHAT CAN WE BUILD? & 13 — UAE LOCATION LOGISTICS
          ========================================================================= */}
      <section
        id="custom-brief"
        aria-label="Custom Fabrication Inquiries and UAE Logistics"
        className="py-10 sm:py-14 bg-[#FAF8F5] relative overflow-hidden border-b border-ivory-border"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-copper inline-block" />
                <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                  HAVE A DIFFERENT BRIEF?
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-charcoal leading-[0.95]">
                NOT ON <br />
                THE LIST? <br />
                <span className="text-copper">THAT'S WHERE CUSTOM STARTS.</span>
              </h2>

              <p className="text-base sm:text-lg text-charcoal/80 font-light leading-relaxed max-w-xl">
                Not every project fits neatly into a category. Share the concept, dimensions or brief and our team can assess the fabrication requirements.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-copper hover:bg-copper-hover text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm inline-flex items-center gap-3 cursor-pointer group"
                >
                  <span>DISCUSS A CUSTOM BUILD</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:+97165259878"
                  className="px-8 py-4 bg-copper hover:bg-copper-hover text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm inline-flex items-center gap-3 cursor-pointer group"
                >
                  <Phone className="w-4 h-4" />
                  <span>+971 6 525 9878</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-charcoal/20 shadow-architectural group bg-charcoal">
                <img
                  src="/images/services-planning-table.jpg"
                  alt="Architectural CAD blueprints, timber samples, extruded copper profiles, and calipers"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover:scale-102"
                  loading="lazy"
                />

                <div className="absolute top-4 left-4 bg-charcoal/85 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white">
                  MATERIAL SPECIFICATION BENCH
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 border border-ivory-border text-charcoal text-[11px] font-mono tracking-wider shadow-sm">
                  <span className="text-copper font-bold block">SAMPLE VERIFICATION</span>
                  <span>SHARJAH FABRICATION HQ</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          14 — FINAL CTA
          ========================================================================= */}
      <section
        id="services-cta"
        aria-label="Request Fabrication Quote for UAE Events and Exhibitions"
        className="py-12 sm:py-16 relative overflow-hidden bg-charcoal text-white"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-pavilion.jpg"
            alt="Completed bespoke exhibition and corporate event environment in UAE by Pioneer Carpentry"
            className="w-full h-full object-cover object-center filter brightness-[0.20] contrast-[1.2]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1.5px] bg-copper inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
              YOUR NEXT BUILD STARTS HERE.
            </span>
            <span className="w-8 h-[1.5px] bg-copper inline-block" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-white leading-[0.95] mb-6">
            BRING US THE IDEA. <br />
            <span className="text-copper">WE'LL BUILD THE REALITY.</span>
          </h2>

          <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            From a single custom element to a complete exhibition or event environment, talk to Pioneer about your next fabrication project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-10 py-4 bg-copper hover:bg-copper-hover text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="tel:+97165259878"
              className="w-full sm:w-auto px-10 py-4 bg-copper hover:bg-copper-hover text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Phone className="w-4 h-4" />
              <span>CALL +971 6 525 9878</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/60 tracking-wider">
            <a
              href="mailto:Charles@pioneerexhibition.ae"
              className="hover:text-copper transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-copper" />
              <span>Charles@pioneerexhibition.ae</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-copper" />
              <span>Sharjah, United Arab Emirates</span>
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
