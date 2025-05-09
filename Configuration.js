function getConfiguration(config)
{
  config.addressLabel = {en: "DEVEUI", es: "DEVEUI"};
}

function getEndpoints(deviceAddress, endpoints)
{
  endpoints.addEndpoint("2", "RSSI", endpointType.signalStrength);
}