import * as React from 'react';

export const DotsLoading = () => {
    return (
        <div className="loading">
            <svg className="loading__main-dot"></svg>
            <div className="loading__dots-wrapper">
                <svg className="loading__dot"></svg>
                <svg className="loading__dot"></svg>
                <svg className="loading__dot"></svg>
            </div>
        </div>
    )
}