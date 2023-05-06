### Procedure

Consider a use case of the car rental application as follows:

-  **Use Case Name:** Release a Vehicle (to a customer)

- **Description:** A customer arrives to acquire the vehicle and depart for desired destination. The vehicle reservation contract is signed and the vehicle is released to the customer.

- **Actors:** Front-Desk Office Executive, Customer

  Basic Flow ("Sunny Day Scenario"):

    1. A customer comes to the office to acquire a vehicle.

    2. The Office Executive locates the vehicle reservation contract by means of the reservation number and/or customer name. [Exception: Required vehicle type is not available due to late arrivals.]

    3. The customer signs the contract and the Office Executive gives the keys to the vehicle.

    4. The Office Executive then marks the contract active by entering the vehicle release date (today's date) onto the vehicle reservation contract. The use case terminates at this point.

-  **Exceptions ("Rainy Day Scenario"):**

    1. Required vehicle type is not available due to late arrivals:

    2. Raised when the reserved vehicle is not available due to late returns. The customer is informed of the situation and told about the other vehicle types that are available. The customer is offered an incentive to accept another vehicle type. If the customer is not satisfied, the reservation is cancelled without penalty charges. The customer either accepts another vehicle type or cancels the reservation.

- **Postconditions:** The customer departs with the vehicle and the reservation contract is marked active, or the reservation is cancelled.

-  **Stakeholder:** Reservation department

Experiment 1 recap: Use case was completed. Noun phrases and conceptual classes were identified, and the domain object model was constructed.

Experiment 2 recap: The verb phrases were identified and the method invocation between the objects were ordered to construct the time sequence model.

Experiment 3 recap: The datatype of attributes and the signature of the methods were identified for every class. The relationship between classes was defined to construct the class diagram.

Experiment 4 recap: The class Customer was implemented in Java following the constraints given on the attributes and its accessor and mutator functions.

Experiment 5 recap: The aggregation and composition relationship of the class **Customer** and class Vehicle with class **Reservation** was implemented in java.

Experiment 6 recap: The generalization of the class Customer and class Exec as the class Person was implemented in Java.

Now, the steps to implement the polymorphic behaviour of the Person object as Customer and Exec objects before and after conversion of the class Person as abstract:

Step 1: Implement the widening and narrowing of the Person, Customer and Exec object.

Step 2: Convert class Person as abstract and implement the widening and narrowing of the Person, Customer and Exec object.

Step 3: Complete the methods in the sequence diagram order of invocation as follows:

    i. Exec class – requestVehicle

    ii. Reservation class – locateReservation,

    iii. Exec class – signContract

    iv. Reservation class – releaseContract

    v. Vehicle class – updateKeystatus

Step 4: Use the provided TestDriver class to check the status of working.

Output: Execution of the TestDriver code is shown in the console view.

> **Note:** Work on the experiments sequentially.

