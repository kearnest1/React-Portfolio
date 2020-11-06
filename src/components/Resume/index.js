import React from 'react';
// import DownloadLink from "react-download-link";
import ResumePdf from "../../assets/resume.pdf";

function Resume() {
        return (
        <section>

            <a href={ResumePdf} download>
                <button className="resumeDownload">
                    Download Resume
                </button>
            </a>
        </section>
    );
}

export default Resume;