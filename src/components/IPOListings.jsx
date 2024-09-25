// Import necessary dependencies
import React from 'react'
import listings from '../constant'; // Import IPO listings data
import { useNavigate } from 'react-router-dom'; // Import navigate hook for routing

const IPOListings = () => {
    const navigate = useNavigate();

    // Define a function to handle company clicks and navigate to the IPO details page
    const handleCompanyClick = (company) => {
        navigate(`/ipo-details/${company}`);
    };

    return (
        <div className="container mx-auto p-4">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Company / Issue date</th>
                        <th className="py-2 px-4 border-b text-left">Issue size</th>
                        <th className="py-2 px-4 border-b text-left">Price range</th>
                        <th className="py-2 px-4 border-b text-left">Min invest/qty</th>
                    </tr>
                </thead>
                <tbody>
                    {listings.map((listing, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-2 px-4 flex items-center">
                                <img src={listing.logo} alt={`${listing.company} logo`} className="w-8 h-8 mr-2" />
                                <div>
                                    <div className="font-bold text-blue-900 cursor-pointer"
                                    onClick={() => handleCompanyClick(listing.company)}>
                                        {listing.company}</div>
                                    <div className="text-gray-500">{listing.date}</div>
                                </div>
                            </td>
                            <td className="py-2 px-4 text-blue-900">{listing.size}</td>
                            <td className="py-2 px-4 text-blue-900">{listing.priceRange}</td>
                            <td className="py-2 px-4">
                                <div className="text-blue-900">{listing.minInvest}</div>
                                <div className="text-gray-500">{listing.shares}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default IPOListings


