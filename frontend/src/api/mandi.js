import axios from "axios";

// Reverse Geocode
export const reverseGeocode = async (lat, lng) => {
    try {
        const response = await axios.get(
            "https://nominatim.openstreetmap.org/reverse",
            {
                params: {
                    lat,
                    lon: lng,
                    format: "json"
                }
            }
        );

        const address = response.data.address;

        const districtRaw =
            address.state_district ||
            address.county ||
            address.city_district ||
            "";

        return {
            state: address.state?.trim(),
            district: districtRaw
                .replace(" District", "")
                .replace(" district", "")
                .trim()
        };

    } catch (error) {
        console.error("Reverse geocode error:", error);
        return null;
    }
};

// Fetch mandi via YOUR backend (not data.gov directly)
export const fetchMandiPrices = async (state, district) => {
    try {
        const response = await axios.get("/api/mandi", {
            params: { state, district }
        });

        return response.data.records || [];

    } catch (error) {
        console.error("Frontend mandi error:", error.response?.data || error);
        return [];
    }
};
