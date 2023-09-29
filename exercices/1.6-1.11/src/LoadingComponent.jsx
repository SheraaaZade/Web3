import React, { useState, useEffect } from "react";

const LoadingComponent = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            {loading ? (
                <div>Chargement en cours...</div>
            ) : (
                <div>
                </div>
            )}
        </div>
    );
};

export default LoadingComponent;