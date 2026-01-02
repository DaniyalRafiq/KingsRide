import { RiCheckLine } from "@remixicon/react";
import React from "react";

const FeaturesHeading = ({ headingSpan, title, para, listheading, listpara, listheadingsec, listparasec }) => {
    return (
        <div className="feature-content">
            <div className="features-heading">
                <span>{headingSpan}</span>
                <h3>{title}</h3>
                <p>{para}</p>
            </div>
            <div className="feature-list-main">
                <div className="feature-list">
                    <div className="icon">
                        <RiCheckLine />
                    </div>
                    <div className="feature-list-content">
                        <h6>{listheading}</h6>
                        <p>{listpara}</p>
                    </div>
                </div>
                <div className="feature-list">
                    <div className="icon">
                        <RiCheckLine />
                    </div>
                    <div className="feature-list-content">
                        <h6>{listheadingsec}</h6>
                        <p>{listparasec}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturesHeading;  


