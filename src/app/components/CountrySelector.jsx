"use client";

import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

import PK from "country-flag-icons/react/3x2/PK";
import DE from "country-flag-icons/react/3x2/DE";
import US from "country-flag-icons/react/3x2/US";
import FR from "country-flag-icons/react/3x2/FR";
import JP from "country-flag-icons/react/3x2/JP";

import { useLanguage } from "../Context/LanguageContext";

const countries = [
    { name: "Pakistan", code: "PK", Flag: PK, language: "Urdu" },
    { name: "Germany", code: "DE", Flag: DE, language: "German" },
    { name: "United States", code: "US", Flag: US, language: "English" },
    { name: "France", code: "FR", Flag: FR, language: "French" },
    { name: "Japan", code: "JP", Flag: JP, language: "Japanese" },
];

export function CountrySelector() {
    const { changeLanguage } = useLanguage(); // 🌍 GLOBAL LANGUAGE CONTEXT

    // ✅ Header applied state
    const [appliedCountry, setAppliedCountry] = useState(countries[0]);
    const [appliedLanguage, setAppliedLanguage] = useState("English");

    // 🟡 Temporary modal selection state
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const [showModal, setShowModal] = useState(false);

    // Options for react-select
    const countryOptions = countries.map((country) => ({
        value: country.code,
        label: country.name,
        country,
    }));

    // Change country in modal
    const handleCountryChange = (option) => {
        setSelectedCountry(option.country);
        // Set language dropdown to ["English", country.localLanguage]
        setSelectedLanguage(option.country.language === "English" ? "English" : option.country.language);
    };

    // Change language in modal
    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    // Save changes and update website language globally
    const handleSave = () => {
        setAppliedCountry(selectedCountry);
        setAppliedLanguage(selectedLanguage);

        // 🌍 Update language context for entire website
        changeLanguage(selectedLanguage);

        setShowModal(false);
    };

    // Language select options: always English + country local language
    const languageOptions = selectedCountry.language === "English"
        ? ["English"]
        : ["English", selectedCountry.language];

    // Styles for react-select
    const customStyles = {
        option: (provided) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            gap: "8px",
        }),
        singleValue: (provided) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            gap: "8px",
        }),
    };

    return (
        <>
            {/* Header button */}
            <button className="country-header-btn" onClick={() => setShowModal(true)}>
                <div className="icon">
                    <appliedCountry.Flag className="flag-sm" style={{ width: "24px" }} />
                </div>
                <span>{appliedLanguage}</span>
            </button>

            {/* Modal */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                size="lg"
                contentClassName="country-modal-content"
            >
                <div className="modal-close" onClick={() => setShowModal(false)}>
                    &times;
                </div>

                <h5 className="modal-title">Country and Language</h5>

                <Form className="d-flex gap-2 mt-3">
                    {/* Country Select */}
                    <div style={{ flex: 1 }}>
                        <Select
                            options={countryOptions}
                            value={countryOptions.find(
                                (o) => o.value === selectedCountry.code
                            )}
                            onChange={handleCountryChange}
                            styles={customStyles}
                            getOptionLabel={(option) => (
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <option.country.Flag style={{ width: "20px" }} />
                                    <span>{option.label}</span>
                                </div>
                            )}
                        />
                    </div>

                    {/* Language Select */}
                    <Form.Select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className="country-select"
                    >
                        {languageOptions.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </Form.Select>
                </Form>

                <Button
                    className="theme-btn country-btn mt-3"
                    onClick={handleSave}
                >
                    Save
                </Button>
            </Modal>
        </>
    );
}
