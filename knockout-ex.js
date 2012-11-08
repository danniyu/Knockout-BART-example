
// Overall viewmodel for this screen, along with initial state
function FareCalculationModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.stations = [
        { stationName: "12th"},
        { stationName: "16th"},
        { stationName: "19th"}
    ];    

    self.originStation = ko.observable(self.stations[0]);
    self.destinationStation = ko.observable(self.stations[1]);

    self.formattedPrice = ko.computed(function() {
        return 1; 
    }); 

    }    
    // // Editable data



$(document).ready(function() {
    ko.applyBindings(new FareCalculationModel());
});
