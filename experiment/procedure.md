## Stage 1: Instructions  
At the beginning, you will see an **Instructions page**. This page contains a short, ordered list that explains the task, along with a **Next** button.  
Take a moment to read the instructions carefully. The experiment is designed to help you learn about upcasting, downcasting, and static binding by modifying the `TestDriver` class. Once you understand the purpose, click **Next** to continue.  

---

## Stage 2: Class Diagram  
Next, you will see a **class diagram** that shows the main classes used in the experiment. You can move between the diagram and the class tabs.  
Study the relationships between the classes. Pay special attention to the superclass–subclass structure involving `Person`, `Customer`, and `Exec`. This diagram will help you understand inheritance before you begin editing code.  

---

## Stages 3 to 7: Person, Customer, Exec, Reservation, and Vehicle Classes  
In these stages, you will see **read‑only views of the classes**. Each tab shows predefined code and structure.  
Review the classes carefully. Identify which ones are superclasses and which ones are subclasses. Notice the constructors, getters, setters, and relationships, as these will be important later.  

---

## Stage 8: Test Driver Class  
Here begins the main activity on subtype polymorphism. You will see a **code editor** with missing parts to fill in, a checklist of tasks, and help buttons.  
Follow the comments in the code step by step. You will create arrays, store objects using upcasting, observe static binding, and use downcasting when necessary. Each correct step will be marked on the checklist, and you will receive feedback if something is incorrect.  

---

## Stage 9: Abstraction  
At this stage, you will modify the `Person` class to make it **abstract**. After doing so, you will see what happens when the program tries to create a `Person` object directly. This will demonstrate why abstract classes cannot be instantiated.  

---

## Stage 10 to 14: Adding Methods  
In the following stages, you will add methods to different classes:  
- **Stage 10:** Write the `requestVehicle` method in the `Exec` class.  
- **Stage 11:** Complete the reservation lookup method in the `Reservation` class.  
- **Stage 12:** Implement the contract signing logic.  
- **Stage 13:** Write code to release a reservation contract.  
- **Stage 14:** Update the key status in the `Vehicle` class.  

Each step provides immediate feedback, helping you understand how objects interact and how state changes are handled.  

---

## Stage 15: Rental System Class  
Here, you will bring everything together. You will construct the `RentalSystem` class by creating arrays for customers, executives, vehicles, and reservations. You will also write methods like `assignExec()` and `visitOffice(...)`. This stage shows how all the classes interact to form a complete system.  

---

## Stage 16: Understanding the Output  
You will now see the final `TestDriver.java` code alongside a console output. Compare the code with the output to observe how the objects interact in sequence. This stage is explanatory, showing the successful behavior of the program.  

---

## Stage 17: Completion  
Finally, you will see a **congratulations message**. This marks the end of the simulation. You can review what you learned or revisit earlier stages if you wish.  

---

# How Theory Connects to Practice  
- **Subtype Polymorphism:** You store `Customer` and `Exec` objects in references of type `Person`.  
- **Upcasting:** Subclass objects are automatically assigned to superclass references.  
- **Downcasting:** You convert a superclass reference back to a subclass type when needed.  
- **Static Binding:** You observe how reference type determines accessible methods at compile time.  
- **Abstract Classes:** You learn why abstract classes serve as conceptual parents but cannot be instantiated directly.  

---

# Common Mistakes to Avoid  
- Using the wrong array type.  
- Forgetting that subclass objects can be stored in superclass references.  
- Missing explicit downcasting when required.  
- Trying to instantiate an abstract class.  
- Ignoring the class diagram while completing methods.  

---

# Final Learning Outcome  
By the end of this simulation, you will be able to:  
- Explain subtype polymorphism in Java.  
- Identify examples of upcasting and downcasting.  
- Understand the role of static binding.  
- Explain why abstract classes cannot be instantiated.  
- Follow object interactions across multiple related classes.  
- Read a small object‑oriented program and connect it to its output.  
