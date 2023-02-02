import React from "react";

const Card = ({ user }: any) => {
  const { name, username, address, email, phone, website, company } = user;
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <>
      <div className="bg-white p-20 rounded-lg shadow-lg m-2 flex justify-between">
        <div className="text-gray-700 mb-2 flex flex-col w-32">
          <span className="font-medium">Name</span>
          <a>{name}</a>
        </div>
        <div className="text-gray-700 mb-2 flex flex-col w-32">
          <span className="font-medium">Contact</span>
          <a>{username}</a>
        </div>
        <div className="text-gray-700 mb-2 flex flex-col w-32">
          <span className="font-medium">Location</span>
          <a>{address.city}</a>
        </div>
        <div className="text-gray-700 mb-2 flex flex-col w-32">
          <span className="font-medium">State</span>
          <a>{address.street}</a>
        </div>

        <button
          className="bg-red-500 text-white py-2 px-4 rounded-full h-[40px]"
          onClick={() => setShowDetails(!showDetails)}
        >
          {!showDetails ? "View More" : "Hide Details"}
        </button>
      </div>
      {showDetails && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="text-gray-700 mb-2">
            <span className="font-medium">Name</span> {name}
          </div>
          <div className="text-gray-700 mb-2">
            <span className="font-medium">Username</span> {username}
          </div>
          <div className="text-gray-700 mb-2">
            <span className="font-medium">Email</span> {email}
          </div>
          <div className="text-gray-700 mb-2">
            <span className="font-medium">City</span> {address.city}
          </div>
          <div className="text-gray-700 mb-2">
            <span className="font-medium">Zipcode</span> {address.zipcode}
          </div>
          <div className="text-gray-700 mb-2">
            <span className="font-medium">Phone</span> {phone}
          </div>
          <div className="text-gray-700 mb-2">
            <span className="font-medium">Website</span> {website}
          </div>
          <div className="text-gray-700 mb-2">
            <span className="font-medium">Company</span> {company.name}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
