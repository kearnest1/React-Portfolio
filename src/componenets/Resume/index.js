import React from './node_modules/react';
import DownloadLink from "./node_modules/react-download-link";

function Resume() {
        return (
        <section>

            <a href={require("../../assets/resume.pdf")} download>
                <button className="resumeDownload">
                    Download Resume
                </button>
            </a>
        </section>
    );
}

export default Resume;