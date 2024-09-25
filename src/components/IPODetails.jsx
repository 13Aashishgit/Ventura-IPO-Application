// Import necessary dependencies
import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from './Footer'
import listings from "../constant"; // Import IPO listings data
import { FaCheck } from "react-icons/fa"; // Import checkmark icon
import { GrDocumentDownload } from "react-icons/gr"; // Import download icon

// Define the IPODetails component
const IPODetails = () => {
  // Get the company name from the URL parameters
  const { company } = useParams();
  // Find the IPO listing data for the specified company
  const listing = listings.find((listing) => listing.company === company);

  // If no listing data is found, display an error message
  if (!listing) {
    return <div>Company not found</div>;
  }

  // Return the IPO details page
  return (
    <div className="max-w-4xl mx-auto p-4">
      <nav className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:underline m-2">
          Home
        </Link>
        <span className="mx-2">{">"}</span>
        <Link to="#" className="hover:underline">
          Market watch
        </Link>
      </nav>
      {/* IPO details container */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              src={listing.logo}
              alt={`${listing.company} logo`}
              className="w-12 h-12 mr-4"
            />
            <div>
              <h1 className="text-xl font-semibold">{listing.company}</h1>
              <p className="text-gray-500"></p>
            </div>
          </div>
          <div className="flex items-center">
            <GrDocumentDownload className="text-4xl m-2 cursor-pointer" />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center">
              Apply now
            </button>
          </div>
        </div>

        {/* IPO details section */}
        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">IPO details</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-medium">Issue size</p>
              <p>{listing.size}</p>
            </div>
            <div>
              <p className="font-medium">Price range</p>
              <p>{listing.priceRange}</p>
            </div>
            <div>
              <p className="font-medium">Minimum amount</p>
              <p>{listing.minInvest}</p>
            </div>
            <div>
              <p className="font-medium">Lot size</p>
              <p>{listing.shares}</p>
            </div>
            <div>
              <p className="font-medium">Issue dates</p>
              <p>{listing.date}</p>
            </div>
            <div>
              <p className="font-medium">Listed on</p>
              <p>{listing.listedOn}</p>
            </div>
            <div>
              <p className="font-medium">Listed price</p>
              <p>{listing.listedPrice}</p>
            </div>
            <div>
              <p className="font-medium">Listing gains</p>
              <p>{listing.listingGains}</p>
            </div>
          </div>
        </div>

        {/* IPO timeline section */}
        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">IPO timeline</h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaCheck className="text-white" />
                </div>
                <div className="w-16 h-1 bg-green-500"></div>
              </div>
              <p
                className="mt-2 text-center"
                style={{ fontSize: "0.8em", fontWeight: 700, maxWidth: "80px" }}
              >
                Bidding starts date
              </p>
              <p style={{ fontSize: "smaller" }}>{listing.biddingStart}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaCheck className="text-white" />
                </div>
                <div className="w-16 h-1 bg-green-500"></div>
              </div>
              <p
                className="mt-2 text-center"
                style={{ fontSize: "0.8em", fontWeight: 700, maxWidth: "80px" }}
              >
                Bidding end date
              </p>
              <p style={{ fontSize: "smaller" }}>{listing.biddingEnd}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaCheck className="text-white" />
                </div>
                <div className="w-16 h-1 bg-green-500"></div>
              </div>
              <p
                className="mt-2 text-center"
                style={{ fontSize: "0.8em", fontWeight: 700, maxWidth: "80px" }}
              >
                Allotment finalization
              </p>
              <p style={{ fontSize: "smaller" }}>{listing.allomentFinalDate}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaCheck className="text-white" />
                </div>
                <div className="w-16 h-1 bg-green-500"></div>
              </div>
              <p
                className="mt-2 text-center"
                style={{ fontSize: "0.8em", fontWeight: 700, maxWidth: "80px" }}
              >
                Refund Initiation
              </p>
              <p style={{ fontSize: "smaller" }}>{listing.refundDate}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaCheck className="text-white" />
                </div>
                <div className="w-16 h-1 bg-green-500"></div>
              </div>
              <p
                className="mt-2 text-center"
                style={{ fontSize: "0.8em", fontWeight: 700, maxWidth: "80px" }}
              >
                Demat Transfer
              </p>
              <p style={{ fontSize: "smaller" }}>{listing.dmatTransferDate}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaCheck className="text-white" />
                </div>
                <div className="w-16 h-1 "></div>
              </div>
              <p
                className="mt-2 text-center"
                style={{ fontSize: "0.8em", fontWeight: 700, maxWidth: "80px" }}
              >
                IPO Listing date
              </p>
              <p style={{ fontSize: "smaller" }}>{listing.listedOn}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default IPODetails;
