# First Responder System

First Responder System is a web application built in React, compiled by webpack, with a node.js server and a postgresql database. The purpose of FRS is lightning fast communication between users and first responders with geolocation details of users and responders, live updates on situation and response for users and responders, an ongoing log of each implementation of the system and each detail to be saved in a database for eventual machine learning assistance to improve the process further, and a full security plan for natural disasters, biohazards, human threats, fire, medical emergencies, and any conceiveable threat to the well-being of the users.

FRS has been deployed as a business-facing application, though there is the potential for expansion to the use of every citizen.

A Content Management System will be implemented for the customization of client threats and their respective responses, for example, a college in California wants earthquake response as a feature. The administrators will have the ability to input who is contacted by what method and custom parameters pertaining to the situation.

Authentication will be implemented either with OAuth2 or ActiveDirectory. As soon as security is set in place we will test for every weakness we can find and alter the security plan accordingly.
Tenetively the password is stored in a test database hashed with bcrypt.

Implementation:

The user perceives a threat and logs into the app (one-click login ideally). The opening screen of the app is simply a button that says 'push to activate FRS'. The button may be altered in the future to be held down for a certain number of seconds or draw a simple pattern to prevent accidental activations. Immediately upon activation, FRS with start a timer and send a distress call to the FRS network with the user's information and geolocation. An axios get request is sent to the FRS API and the organizations list of threat types is retrieved from a postgresql database. On clicking the tabs labeled with threat types (A 'fire' button that goes from gray to green when toggled), the user then submits all relevant threat categories. The timer is sending all time stamps of user action and the response of crisis managers/responders to the database.

Once the threat types are identified, a second axios post call is made to the FRS API to gauge which responder(s) is most appropriate to the situation. The responders get the information on their end and move towards the threat location with live updates from that moment until the crisis is resolved and FRS can be deactivated. A warning is also issued to all users in the caller's organization, in the form of a mass text or app notification.

From activation to the FRS calling to deploy responding units should ideally take less than 20 seconds.

After this step, the user will be prompted to provide a description with the options of text, voice, or video. All users in a certain radius will also be given this option to submit data on the situation including updates on changes and more accurate details on location and description.
