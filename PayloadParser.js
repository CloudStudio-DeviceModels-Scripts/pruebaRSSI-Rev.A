function parseUplink(device, payload) {
    var parsed = payload.asParsedObject();
    env.log(parsed);

    
    if (parsed.rssi != null) {
        var rssiSensor = device.endpoints.byType(endpointType.signalStrength);
        rssiSensor.updateSignalStrength(parsed.rssi);
    }
}

