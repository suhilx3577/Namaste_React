import  ReactDOM  from "react-dom/client";
import React from "react";

const Heading =()=> (
    <img className= "logo"
    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
    alt="logo"/>
);

const NavItems =()=> (
    <div className="navbar">
        <h3>HOME</h3>
        <h3>ABOUT</h3>
        <h3>CART</h3>
        <h3>CONTACT</h3>
    </div>
);


const restroList =[
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "593472",
          "name": "Grill Factory",
          "uuid": "3c001508-e5d4-4949-9213-2e87767b3da3",
          "city": "1",
          "area": "Whitefield",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "yabdhpx21zk24cnczpnf",
          "cuisines": [
            "Arabian",
            "Lebanese"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "slaString": "36 MINS",
          "lastMileTravel": 7.199999809265137,
          "slugs": {
            "restaurant": "grill-factory-whitefield-whitefield",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "#166, Mann Food Court, A K Gopalan Colony Main Rd, Ambedkar Nagar, Whitefield, Bengaluru, Karnataka 560066, India",
          "locality": "Ambedkar Nagar",
          "parentId": 7289,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "30% off",
            "shortDescriptionList": [
              {
                "meta": "30% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "30% off up to ₹75 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "30% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "30% off up to ₹75 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6127432~p=1~eid=00000186-ae4f-f4e0-0a6c-526300910174",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "7.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "593472",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "lastMileTravel": 7.199999809265137,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.7",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "418",
          "name": "Ande Ka Funda",
          "uuid": "80f87c90-b6f4-48ef-b110-9bbfad549b39",
          "city": "1",
          "area": "Kadubeesanahalli",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "hwnvirxf8oxaubiflcag",
          "cuisines": [
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 10000,
          "costForTwoString": "₹100 FOR TWO",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "slaString": "40 MINS",
          "lastMileTravel": 9.399999618530273,
          "slugs": {
            "restaurant": "ande-ka-funda-shymala-reddy-dental-college-road-marathahalli",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "6, Shymala Reddy Dental College Road, Marathahalli",
          "locality": "Munnekolala",
          "parentId": 15677,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "10% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "9.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "418",
            "deliveryTime": 40,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 40,
            "lastMileTravel": 9.399999618530273,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.6",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "271483",
          "name": "Burger King",
          "uuid": "5192f2cd-cdc5-4c9a-bdd9-0d0602f532d1",
          "city": "1",
          "area": "Krishnarajapura",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "npclnb08jvlkgdtpltof",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "slaString": "29 MINS",
          "lastMileTravel": 4.900000095367432,
          "slugs": {
            "restaurant": "burger-king-vr-mall-mahadevpura",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Back gate, FC-12,Food Court , Second Floor, VR Mall,PLOT no. 11B,Dyvasandra Village,Krishna Raj Puram,Hobi,560048",
          "locality": "VR Mall",
          "parentId": 166,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FREE DELIVERY",
            "shortDescriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "",
            "shortDescriptionList": [
              {
                "meta": "Free Delivery",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "4.9 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "271483",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "lastMileTravel": 4.900000095367432,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "559758",
          "name": "Olio - The Wood Fired Pizzeria",
          "uuid": "d2e61be3-42f2-449f-a838-c2d05b142919",
          "city": "1",
          "area": "Whitefield",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "q92wx1p0qfu1uxartwxm",
          "cuisines": [
            "Pizzas",
            "Italian"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "slaString": "33 MINS",
          "lastMileTravel": 4.300000190734863,
          "slugs": {
            "restaurant": "olio-the-wood-fired-pizzeria-graphite-main-road-mahadevpura",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "SRI VINAYAKA TECH PARK,KHATA NO 101/267,268/11,GROUND FLOOR,GRAPHITE MAIN ROAD,HOODI VILLAGE,KR PURAM BBMP EAST, Mahadevapura , B.B.M.P East",
          "locality": "Hoodi",
          "parentId": 11633,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use GUILTFREE",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹120 | Use code GUILTFREE",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use GUILTFREE",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹120 | Use code GUILTFREE",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6095670~p=4~eid=00000186-ae4f-f4e0-0a6c-526400910421",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "4.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "559758",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 4.300000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "1221",
          "name": "Biryani Day",
          "uuid": "1dec917e-3f4b-479b-b4db-f7095248bbd8",
          "city": "1",
          "area": "Marathahalli",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "ucpbuzrvhg0ire3h9hwu",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Andhra",
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "slaString": "29 MINS",
          "lastMileTravel": 8.899999618530273,
          "slugs": {
            "restaurant": "biryani-day-thulsi-theater-road-marathahalli",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "No 389/2, 7th Cross, Thulsi Theater Road, Marathalli",
          "locality": "Thulsi Theater Road",
          "parentId": 2635,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "8.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "1221",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "lastMileTravel": 8.899999618530273,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.7",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "78138",
          "name": "Imperio Restaurant",
          "uuid": "720a8824-2c21-4957-93c8-b4b3fe7f6f6e",
          "city": "1",
          "area": "Marathahalli",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "pbf2ovbp5fh1etco2sh2",
          "cuisines": [
            "Chinese",
            "South Indian",
            "North Indian",
            "Desserts",
            "Thai"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "slaString": "37 MINS",
          "lastMileTravel": 7,
          "slugs": {
            "restaurant": "imperio-restaurant-whitefield-whitefield-3",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "3A, squre plaza,ground floor, itpl main road,Kundalahalli,banglore.",
          "locality": "kundalahalli",
          "parentId": 5610,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "78138",
            "deliveryTime": 37,
            "minDeliveryTime": 37,
            "maxDeliveryTime": 37,
            "lastMileTravel": 7,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      }
];

const RestCards =({name,cloudinaryImageId,area,cuisines})=>{
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
            +cloudinaryImageId} alt="image"/>
            <h3>{name}</h3>
            <p>{cuisines.join(" ,")}</p>
            <h5>{area}</h5>
        </div>
    )
}

const HeaderComponent =() =>{
    return(
        <>
        <div className="header">
        <Heading/>
        <NavItems/>
        </div>
        <div className="body">
            {
                restroList.map((rest)=>{
                    return <RestCards {...rest.data} key={rest.data.id}/>
                })
            }
        </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeaderComponent/>)