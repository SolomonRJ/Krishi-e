
import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

// Schemes Data provided by user
const SCHEMES_DATA = [
    {
        "id": "pm_kisan",
        "title": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        "level": "National",
        "category": "Income Support",
        "benefit": "₹6,000 per year in three installments",
        "eligibility": "All landholding farmer families",
        "officialLink": "https://pmkisan.gov.in"
    },
    {
        "id": "pmfby",
        "title": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        "level": "National",
        "category": "Crop Insurance",
        "benefit": "Insurance coverage at low farmer premium",
        "eligibility": "Farmers growing notified crops",
        "officialLink": "https://pmfby.gov.in"
    },
    {
        "id": "kcc",
        "title": "Kisan Credit Card (KCC)",
        "level": "National",
        "category": "Agricultural Credit",
        "benefit": "Short-term crop loans at subsidized interest rates",
        "eligibility": "Farmers, livestock and fisheries farmers",
        "officialLink": "https://www.myscheme.gov.in"
    },
    {
        "id": "pmksy",
        "title": "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
        "level": "National",
        "category": "Irrigation",
        "benefit": "Subsidy for micro irrigation (drip & sprinkler)",
        "eligibility": "Farmers adopting water-saving irrigation methods",
        "officialLink": "https://pmksy.gov.in"
    },
    {
        "id": "enam",
        "title": "e-NAM (National Agriculture Market)",
        "level": "National",
        "category": "Market Access",
        "benefit": "Online agricultural commodity trading platform",
        "eligibility": "Registered farmers & traders",
        "officialLink": "https://www.enam.gov.in"
    },
    {
        "id": "soil_health_card",
        "title": "Soil Health Card Scheme",
        "level": "National",
        "category": "Soil Management",
        "benefit": "Free soil testing & nutrient recommendations",
        "eligibility": "All farmers",
        "officialLink": "https://soilhealth.dac.gov.in"
    },
    {
        "id": "pm_kusum",
        "title": "Pradhan Mantri KUSUM Scheme",
        "level": "National",
        "category": "Solar Subsidy",
        "benefit": "Subsidy for solar pumps & grid-connected solar plants",
        "eligibility": "Individual farmers & cooperatives",
        "officialLink": "https://mnre.gov.in"
    },
    {
        "id": "pkvy",
        "title": "Paramparagat Krishi Vikas Yojana (PKVY)",
        "level": "National",
        "category": "Organic Farming",
        "benefit": "Financial support for organic farming clusters",
        "eligibility": "Groups of farmers adopting organic farming",
        "officialLink": "https://pgsindia-ncof.gov.in"
    },
    {
        "id": "national_horticulture_mission",
        "title": "Mission for Integrated Development of Horticulture (MIDH)",
        "level": "National",
        "category": "Horticulture",
        "benefit": "Subsidy for plantation, greenhouse, storage, nursery",
        "eligibility": "Horticulture farmers",
        "officialLink": "https://midh.gov.in"
    },
    {
        "id": "agri_infra_fund",
        "title": "Agriculture Infrastructure Fund (AIF)",
        "level": "National",
        "category": "Infrastructure",
        "benefit": "Interest subvention for agri infrastructure projects",
        "eligibility": "Farmers, FPOs, agri entrepreneurs",
        "officialLink": "https://agriinfra.dac.gov.in"
    },
    {
        "id": "fpo_scheme",
        "title": "Formation & Promotion of Farmer Producer Organizations (FPO)",
        "level": "National",
        "category": "Collective Farming",
        "benefit": "Financial & technical support for FPO formation",
        "eligibility": "Groups of farmers",
        "officialLink": "https://sfacindia.com"
    },
    {
        "id": "livestock_mission",
        "title": "National Livestock Mission (NLM)",
        "level": "National",
        "category": "Livestock",
        "benefit": "Subsidy for poultry, sheep, goat, fodder development",
        "eligibility": "Livestock farmers & entrepreneurs",
        "officialLink": "https://nlm.udyamimitra.in"
    },
    {
        "id": "dairy_entrepreneurship",
        "title": "Dairy Entrepreneurship Development Scheme",
        "level": "National",
        "category": "Dairy",
        "benefit": "Subsidy for setting up dairy units",
        "eligibility": "Dairy farmers & self-help groups",
        "officialLink": "https://nabard.org"
    },
    {
        "id": "blue_revolution",
        "title": "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
        "level": "National",
        "category": "Fisheries",
        "benefit": "Financial support for fisheries development",
        "eligibility": "Fish farmers & entrepreneurs",
        "officialLink": "https://pmmsy.dof.gov.in"
    }
];

const Schemes = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSchemes = SCHEMES_DATA.filter(scheme =>
        scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-full pb-20"> {/* pb-20 for bottom nav clearance */}
            <div className="p-4 md:p-8 space-y-6">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
                        Government Schemes
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Explore financial aid, subsidies, and development programs for farmers.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search schemes by name or category..."
                        className="pl-10 bg-white/50 backdrop-blur-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Schemes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSchemes.map((scheme) => (
                        <div key={scheme.id} className="glass-card rounded-xl p-5 hover:shadow-glow-green transition-all duration-300 border border-green-50/50 group">
                            <div className="flex justify-between items-start mb-3">
                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                    {scheme.category}
                                </span>
                                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                                    {scheme.level}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                                {scheme.title}
                            </h3>

                            <div className="space-y-3 mb-4">
                                <div>
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Benefit</p>
                                    <p className="text-sm font-medium text-foreground/90">{scheme.benefit}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Eligibility</p>
                                    <p className="text-sm text-foreground/80">{scheme.eligibility}</p>
                                </div>
                            </div>

                            <Button
                                className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                                variant="outline"
                                onClick={() => window.open(scheme.officialLink, '_blank')}
                            >
                                Visit Official Website
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}

                    {filteredSchemes.length === 0 && (
                        <div className="col-span-full text-center py-10 text-muted-foreground">
                            No schemes found matching "{searchTerm}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Schemes;
