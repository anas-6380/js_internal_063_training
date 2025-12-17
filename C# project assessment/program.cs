using System;
using System.Collections.Generic;

#region DELEGATE
delegate double BillingStrategy(Patient patient);
#endregion

#region BASE CLASS
abstract class Patient
{
    public int PatientId { get; set; }
    public string Name { get; set; }
    public string PatientType { get; protected set; }

    // Additional patient details
    public int Age { get; set; }
    public string Gender { get; set; }
    public string ContactNumber { get; set; }

    // Billing strategy label
    public string BillingStrategyUsed { get; protected set; }

    protected Patient(int id, string name, int age, string gender, string contact)
    {
        PatientId = id;
        Name = name;
        Age = age;
        Gender = gender;
        ContactNumber = contact;
    }

    public abstract double CalculateBill();
    public abstract void ShowBillDetails();
}
#endregion

#region DERIVED CLASSES

// OPD Patient
class OPDPatient : Patient
{
    private const int ConsultationCharge = 500;

    public OPDPatient(int id, string name, int age, string gender, string contact)
        : base(id, name, age, gender, contact)
    {
        PatientType = "OPD (Out-Patient)";
        BillingStrategyUsed = "Standard Billing";
    }

    public override double CalculateBill()
    {
        return ConsultationCharge;
    }

    public override void ShowBillDetails()
    {
        Console.WriteLine("Consultation Charges        : INR " + ConsultationCharge);
    }
}

// IPD Patient
class IPDPatient : Patient
{
    public int DaysAdmitted { get; set; }

    private const int RoomChargePerDay = 1500;
    private const int TreatmentChargePerDay = 500;

    public IPDPatient(int id, string name, int age, string gender, string contact)
        : base(id, name, age, gender, contact)
    {
        PatientType = "IPD (In-Patient)";
        BillingStrategyUsed = "Insurance / Standard Billing";
    }

    public override double CalculateBill()
    {
        int roomCharges = DaysAdmitted * RoomChargePerDay;
        int treatmentCharges = DaysAdmitted * TreatmentChargePerDay;
        return roomCharges + treatmentCharges;
    }

    public override void ShowBillDetails()
    {
        Console.WriteLine("Days Admitted                : " + DaysAdmitted);
        Console.WriteLine("Room Charges (1500/day)      : INR " + (DaysAdmitted * RoomChargePerDay));
        Console.WriteLine("Treatment Charges (500/day) : INR " + (DaysAdmitted * TreatmentChargePerDay));
    }
}

// Emergency Patient
class EmergencyPatient : Patient
{
    private const int EmergencyCharge = 3000;
    private const int TreatmentCharge = 2000;

    public EmergencyPatient(int id, string name, int age, string gender, string contact)
        : base(id, name, age, gender, contact)
    {
        PatientType = "Emergency Patient";
        BillingStrategyUsed = "Emergency Billing";
    }

    public override double CalculateBill()
    {
        return EmergencyCharge + TreatmentCharge;
    }

    public override void ShowBillDetails()
    {
        Console.WriteLine("Emergency Charges            : INR " + EmergencyCharge);
        Console.WriteLine("Treatment Charges            : INR " + TreatmentCharge);
    }
}
#endregion

#region EVENT ARGS
class BillGeneratedEventArgs : EventArgs
{
    public int PatientId { get; set; }
    public double Amount { get; set; }
}
#endregion

#region PUBLISHER
class Hospital
{
    public event EventHandler<BillGeneratedEventArgs> BillGenerated;

    public void GenerateBill(Patient patient, BillingStrategy strategy)
    {
        double amount = strategy(patient);

        Console.WriteLine("\nBill Generation Details");
        Console.WriteLine("-----------------------");
        Console.WriteLine("Patient ID        : " + patient.PatientId);
        Console.WriteLine("Patient Name      : " + patient.Name);
        Console.WriteLine("Age               : " + patient.Age);
        Console.WriteLine("Gender            : " + patient.Gender);
        Console.WriteLine("Contact Number    : " + patient.ContactNumber);
        Console.WriteLine("Patient Type      : " + patient.PatientType);

        Console.WriteLine("\nBilling Strategy Applied");
        Console.WriteLine("------------------------");
        Console.WriteLine(patient.BillingStrategyUsed);

        Console.WriteLine("\nBill Breakdown");
        Console.WriteLine("--------------");
        patient.ShowBillDetails();

        Console.WriteLine("\nTotal Bill Amount : INR " + amount);

        BillGenerated?.Invoke(this, new BillGeneratedEventArgs
        {
            PatientId = patient.PatientId,
            Amount = amount
        });
    }
}
#endregion

#region SUBSCRIBERS
class AccountsDepartment
{
    public void Notify(object sender, BillGeneratedEventArgs e)
    {
        Console.WriteLine("Accounts Department       : Bill recorded successfully.");
    }
}

class PharmacyDepartment
{
    public void Notify(object sender, BillGeneratedEventArgs e)
    {
        Console.WriteLine("Pharmacy Department       : Medicines prepared.");
    }
}

class AdminDepartment
{
    public void Notify(object sender, BillGeneratedEventArgs e)
    {
        Console.WriteLine("Administration Department: Discharge / Transfer process initiated.");
    }
}
#endregion

#region MAIN
class Program
{
    static List<Patient> patients = new List<Patient>();
    static Hospital hospital = new Hospital();

    static void Main()
    {
        hospital.BillGenerated += new AccountsDepartment().Notify;
        hospital.BillGenerated += new PharmacyDepartment().Notify;
        hospital.BillGenerated += new AdminDepartment().Notify;

        while (true)
        {
            Console.WriteLine("\nHospital Patient Management System");
            Console.WriteLine("----------------------------------");
            Console.WriteLine("1. Admit Patient");
            Console.WriteLine("2. View All Patients");
            Console.WriteLine("3. Generate Bill");
            Console.WriteLine("4. Exit");

            int choice = ReadInt("Enter your choice: ");

            switch (choice)
            {
                case 1:
                    AdmitPatient();
                    break;
                case 2:
                    ViewPatients();
                    break;
                case 3:
                    GeneratePatientBill();
                    break;
                case 4:
                    Console.WriteLine("Exiting system. Thank you.");
                    return;
            }
        }
    }

    static void AdmitPatient()
    {
        Console.WriteLine("\n--- Admit Patient ---");

        int id = ReadInt("Enter Patient ID: ");
        Console.Write("Enter Patient Name: ");
        string name = Console.ReadLine();
        int age = ReadInt("Enter Age: ");
        Console.Write("Enter Gender: ");
        string gender = Console.ReadLine();
        Console.Write("Enter Contact Number: ");
        string contact = Console.ReadLine();

        Console.WriteLine("Select Patient Type:");
        Console.WriteLine("1. OPD (Out-Patient)");
        Console.WriteLine("2. IPD (In-Patient)");
        Console.WriteLine("3. Emergency Patient");

        int type = ReadInt("Enter choice: ");

        Patient patient = type switch
        {
            1 => new OPDPatient(id, name, age, gender, contact),
            2 => new IPDPatient(id, name, age, gender, contact),
            3 => new EmergencyPatient(id, name, age, gender, contact),
            _ => null
        };

        if (patient is IPDPatient ipd)
        {
            ipd.DaysAdmitted = ReadInt("Enter number of days admitted: ");
        }

        patients.Add(patient);
        Console.WriteLine("Patient admitted successfully.");
    }

    static void ViewPatients()
    {
        Console.WriteLine("\n--- Patient List ---");

        if (patients.Count == 0)
        {
            Console.WriteLine("No patients admitted yet.");
            return;
        }

        foreach (var p in patients)
        {
            Console.WriteLine(
                $"ID: {p.PatientId}, Name: {p.Name}, Type: {p.PatientType}, Strategy: {p.BillingStrategyUsed}");
        }
    }

    static void GeneratePatientBill()
    {
        Console.WriteLine("\n--- Generate Bill ---");

        int id = ReadInt("Enter Patient ID: ");
        Patient patient = patients.Find(p => p.PatientId == id);

        if (patient == null)
        {
            Console.WriteLine("Patient not found.");
            return;
        }

        BillingStrategy strategy = p => p.CalculateBill();
        hospital.GenerateBill(patient, strategy);
    }

    static int ReadInt(string message)
    {
        int value;
        while (true)
        {
            Console.Write(message);
            if (int.TryParse(Console.ReadLine(), out value))
                return value;

            Console.WriteLine("Invalid input. Please enter a valid number.");
        }
    }
}
#endregion
