from dataclasses import dataclass
from datetime import datetime
from typing import List, Dict, Optional
from enum import Enum

class DonorStatus(Enum):
    REGISTERED = "registered"
    SCREENED = "screened"
    APPROVED = "approved"
    DONATED = "donated"
    DEFERRED = "deferred"

@dataclass
class Donor:
    id: str
    name: str
    age: int
    blood_type: str
    contact: str
    status: DonorStatus = DonorStatus.REGISTERED
    last_donation: Optional[datetime] = None
    medical_history: Dict[str, str] = None

    def __post_init__(self):
        if self.medical_history is None:
            self.medical_history = {}

class BloodDonationEvent:
    def __init__(self, event_name: str, date: datetime, location: str):
        self.event_name = event_name
        self.date = date
        self.location = location
        self.donors: List[Donor] = []
        self.partners: List[str] = []
        self.target_donors = 0
        self.collected_units = 0

    def set_goals(self, target_donors: int) -> None:
        """Set target number of donors for the event."""
        self.target_donors = target_donors
        print(f"Goal set: {target_donors} donors for {self.event_name}")

    def add_partner(self, partner: str) -> None:
        """Add a partnering organization."""
        self.partners.append(partner)
        print(f"Added partner: {partner}")

    def register_donor(self, donor: Donor) -> bool:
        """Register a new donor for the event."""
        if len(self.donors) >= self.target_donors:
            print("Event registration is full")
            return False
        
        self.donors.append(donor)
        print(f"Registered donor: {donor.name}")
        return True

    def screen_donor(self, donor_id: str) -> bool:
        """Perform medical screening for a donor."""
        donor = self._find_donor(donor_id)
        if not donor:
            return False

        # Simulate medical screening process
        if donor.age < 18 or donor.age > 65:
            donor.status = DonorStatus.DEFERRED
            print(f"Donor {donor.name} deferred: Age restriction")
            return False

        donor.status = DonorStatus.SCREENED
        print(f"Donor {donor.name} passed medical screening")
        return True

    def process_donation(self, donor_id: str) -> bool:
        """Process blood donation for a screened donor."""
        donor = self._find_donor(donor_id)
        if not donor or donor.status != DonorStatus.SCREENED:
            return False

        donor.status = DonorStatus.DONATED
        donor.last_donation = datetime.now()
        self.collected_units += 1
        print(f"Successfully collected donation from {donor.name}")
        return True

    def _find_donor(self, donor_id: str) -> Optional[Donor]:
        """Find a donor by their ID."""
        return next((d for d in self.donors if d.id == donor_id), None)

    def generate_report(self) -> Dict[str, any]:
        """Generate event summary report."""
        return {
            "event_name": self.event_name,
            "date": self.date.strftime("%Y-%m-%d"),
            "location": self.location,
            "total_registered": len(self.donors),
            "target_donors": self.target_donors,
            "collected_units": self.collected_units,
            "partners": self.partners,
            "completion_rate": (self.collected_units / self.target_donors * 100) if self.target_donors > 0 else 0
        }

def main():
    # Create a new blood donation event
    event = BloodDonationEvent(
        "Community Blood Drive",
        datetime(2024, 3, 15),
        "Community Center"
    )

    # Set event goals
    event.set_goals(50)

    # Add partners
    event.add_partner("Local Hospital")
    event.add_partner("Red Cross")

    # Register some donors
    donors = [
        Donor("D001", "John Doe", 25, "O+", "555-0001"),
        Donor("D002", "Jane Smith", 30, "A-", "555-0002"),
        Donor("D003", "Bob Johnson", 45, "B+", "555-0003"),
    ]

    for donor in donors:
        event.register_donor(donor)

    # Process donations
    for donor in donors:
        if event.screen_donor(donor.id):
            event.process_donation(donor.id)

    # Generate and print report
    report = event.generate_report()
    print("\nEvent Report:")
    for key, value in report.items():
        print(f"{key}: {value}")

if __name__ == "__main__":
    main()