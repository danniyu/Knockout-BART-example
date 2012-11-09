
function FareCalculationModel() {

    this.stations = [
        { stationName: "12th"},
        { stationName: "16th"},
        { stationName: "19th"}
    ];    

    this.originStation = ko.observable(this.stations[0]);

    this.destinationStation = ko.observable(this.stations[1]);

    this.formattedPrice = ko.computed(function(){
        //console.log(this.originStation() + this.destinationStation());
        var fare = "n/a";
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "http://api.bart.gov/api/sched.aspx?cmd=fare&orig="+this.originStation().stationName+"&dest="+this.destinationStation().stationName+"&key=MW9S-E7SL-26DU-VV8V",
            success: function(xml)  {
                console.log(xml);
                $(xml).find("trip").each(function(){
                    fare = $(this).find('fare').text();
                    alert(fare);

                });
            }
        });
        return fare;
        },this); 
    }    


$(document).ready(function() {
    ko.applyBindings(new FareCalculationModel());
});