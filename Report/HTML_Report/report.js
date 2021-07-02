$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Adactin",
  "description": "",
  "id": "hotel-booking-in-adactin-application;adactin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The  \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;adactin;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;adactin;;1"
    },
    {
      "cells": [
        "AAA",
        "123"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;adactin;;2"
    },
    {
      "cells": [
        "BBB",
        "123445"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;adactin;;3"
    },
    {
      "cells": [
        "SuriyaVeeran17",
        "Music17"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;adactin;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Adactin",
  "description": "",
  "id": "hotel-booking-in-adactin-application;adactin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The  \"AAA\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 5023114500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 1012785800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 241399100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1113283700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Adactin",
  "description": "",
  "id": "hotel-booking-in-adactin-application;adactin;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The  \"BBB\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"123445\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 859105000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BBB",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 307503300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123445",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 260168600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 682029700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Adactin",
  "description": "",
  "id": "hotel-booking-in-adactin-application;adactin;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The  \"SuriyaVeeran17\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Music17\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 524395200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuriyaVeeran17",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 404054600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Music17",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 368493000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1394532400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Search And Select The Room And Details In The Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-and-select-the-room-and-details-in-the-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Click The Search Button It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Location()"
});
formatter.result({
  "duration": 750243900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 308520400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 259401000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 335723900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 643286100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 372455600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 310954400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 330549100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Search_Button_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1145912800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User Confirm The Room In Search Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-confirm-the-room-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User Click The Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User Click The Continue Button It Navigates To The Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Select_Button()"
});
formatter.result({
  "duration": 284894500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Continue_Button_It_Navigates_To_The_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 1504278400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User Book The Room And Payment Details In Search Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-the-room-and-payment-details-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User Enter The Valid First Name",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User Enter The Valid Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Enter The Valid Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Choose The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Select The Select Month In The Expiry Date Box",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Select The Select Year In The Expiry Date Box",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Click The Book Now Button It Navigates To The Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Valid_First_Name()"
});
formatter.result({
  "duration": 309405600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Valid_Last_Name()"
});
formatter.result({
  "duration": 250350200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 527071600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Valid_Credit_Card_Number()"
});
formatter.result({
  "duration": 346096900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Choose_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 267399800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Select_Month_In_The_Expiry_Date_Box()"
});
formatter.result({
  "duration": 278065200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Select_Year_In_The_Expiry_Date_Box()"
});
formatter.result({
  "duration": 248285400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 264455400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Book_Now_Button_It_Navigates_To_The_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 178787600,
  "status": "passed"
});
});