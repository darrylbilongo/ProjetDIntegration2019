#include <lmic.h>
#include <hal/hal.h>
#include <SPI.h>
#include <SoftwareSerial.h>
#include <TinyGPS.h>
TinyGPS gps;
SoftwareSerial ss(3, 4);

static void smartdelay(unsigned long ms);

unsigned int count = 1;        


String datastring1="";        
String datastring2="";        
String datastring3="";
uint8_t datasend[20];    

char gps_lon[20]={"\0"};  
char gps_lat[20]={"\0"}; 
char gps_alt[20]={"\0"}; 
float flat, flon,falt;

static uint8_t mydata[] = "Hello, world!"; 

static const PROGMEM u1_t NWKSKEY[16] =  { 0x96, 0xCD, 0x3A, 0x62, 0xC1, 0x6D, 0x23, 0x62, 0xB2, 0x06, 0xBB, 0x7F, 0x7E, 0xC2, 0x17, 0x1F };

static const u1_t PROGMEM APPSKEY[16] = { 0xD6, 0x66, 0x35, 0xB3, 0x62, 0xFE, 0x81, 0xA5, 0x2A, 0x11, 0xDC, 0x2E, 0x97, 0x31, 0x0B, 0x23 };

static const u4_t DEVADDR = 0x260116CA;

void os_getArtEui (u1_t* buf) { }
void os_getDevEui (u1_t* buf) { }
void os_getDevKey (u1_t* buf) { }


static osjob_t initjob,sendjob,blinkjob;

const unsigned TX_INTERVAL = 20;

// Pin mapping
const lmic_pinmap lmic_pins = {
    .nss = 10,
    .rxtx = LMIC_UNUSED_PIN,
    .rst = 9,
    .dio = {2, 6, 7},
};

void do_send(osjob_t* j){
    if (LMIC.opmode & OP_TXRXPEND) {
        Serial.println("OP_TXRXPEND, not sending");
    } else {
        GPSRead();
        GPSWrite();
  
        
        LMIC_setTxData2(1,datasend,sizeof(datasend)-1,0);
        
        Serial.println("Packet queued");
        Serial.print("LMIC.freq:");
        Serial.println(LMIC.freq);
        Serial.println("");
        Serial.println("");
        Serial.println("Receive data:");
        
    } 
}

void onEvent (ev_t ev) {
    Serial.print(os_getTime());
    Serial.print(": ");
    Serial.println(ev);
    switch(ev) {
        case EV_SCAN_TIMEOUT:
            Serial.println("EV_SCAN_TIMEOUT");
            break;
        case EV_BEACON_FOUND:
            Serial.println("EV_BEACON_FOUND");
            break;
        case EV_BEACON_MISSED:
            Serial.println("EV_BEACON_MISSED");
            break;
        case EV_BEACON_TRACKED:
            Serial.println("EV_BEACON_TRACKED");
            break;
        case EV_JOINING:
            Serial.println("EV_JOINING");
            break;
        case EV_JOINED:
            Serial.println("EV_JOINED");
            break;
        case EV_RFU1:
            Serial.println("EV_RFU1");
            break;
        case EV_JOIN_FAILED:
            Serial.println("EV_JOIN_FAILED");
            break;
        case EV_REJOIN_FAILED:
            Serial.println("EV_REJOIN_FAILED");
            break;
        case EV_TXCOMPLETE:
            Serial.println("EV_TXCOMPLETE (includes waiting for RX windows)");
            if(LMIC.dataLen) {
                // data received in rx slot after tx
                Serial.print("Data Received: ");
                Serial.write(LMIC.frame+LMIC.dataBeg, LMIC.dataLen);
                Serial.println();
            }
            os_setTimedCallback(&sendjob, os_getTime()+sec2osticks(TX_INTERVAL), do_send);
            break;
        case EV_LOST_TSYNC:
            Serial.println("EV_LOST_TSYNC");
            break;
        case EV_RESET:
            Serial.println("EV_RESET");
            break;
        case EV_RXCOMPLETE:
            // data received in ping slot
            Serial.println("EV_RXCOMPLETE");
            break;
        case EV_LINK_DEAD:
            Serial.println("EV_LINK_DEAD");
            break;
        case EV_LINK_ALIVE:
            Serial.println("EV_LINK_ALIVE");
            break;
         default:
            Serial.println("Unknown event");
            break;
    }
}

void setup() {
    Serial.begin(9600);
     ss.begin(9600);  
    while(!Serial);
    Serial.println("LoRa GPS Example---- ");
    Serial.println("Connect to TTN");
    #ifdef VCC_ENABLE
    pinMode(VCC_ENABLE, OUTPUT);
    digitalWrite(VCC_ENABLE, HIGH);
    delay(1000);
    #endif

    os_init();
    LMIC_reset();
    #ifdef PROGMEM
    uint8_t appskey[sizeof(APPSKEY)];
    uint8_t nwkskey[sizeof(NWKSKEY)];
    memcpy_P(appskey, APPSKEY, sizeof(APPSKEY));
    memcpy_P(nwkskey, NWKSKEY, sizeof(NWKSKEY));
    LMIC_setSession (0x1, DEVADDR, nwkskey, appskey);
    #else
    LMIC_setSession (0x1, DEVADDR, NWKSKEY, APPSKEY);
    #endif
    
    LMIC_setLinkCheckMode(0);

    LMIC.dn2Dr = DR_SF9;

    LMIC_setDrTxpow(DR_SF7,14);

    do_send(&sendjob);
}

void GPSRead()
{
  unsigned long age;
  gps.f_get_position(&flat, &flon, &age);
  falt=gps.f_altitude();  //get altitude    
  flat == TinyGPS::GPS_INVALID_F_ANGLE ? 0.0 : flat, 6;   
  flon == TinyGPS::GPS_INVALID_F_ANGLE ? 0.0 : flon, 6;
  falt == TinyGPS::GPS_INVALID_F_ANGLE ? 0.0 : falt, 2;
 
  
}

void GPSWrite()
{
  datastring1 +=dtostrf(flat, 0, 4, gps_lat);   
  datastring2 +=dtostrf(flon, 0, 4, gps_lon);
 
  
  if(flon!=1000.000000)
  {  
    strcat(gps_lon,",");
    strcat(gps_lon,gps_lat); 
      int i = 0;
    for(i = 0; i < 2; i++)
    {
        atof(gps_lon);
      Serial.println("Testing converted data:");
      Serial.println(gps_lon);
    }
    
    strcpy(datasend,gps_lon);
    Serial.print("###########    ");
    Serial.print("NO.");
    Serial.print(count);
    Serial.println("    ###########");
    Serial.println("The longtitude and latitude are:");
    Serial.print("[");
    Serial.print((char*)datasend);
    Serial.print("]");
    Serial.print("");
    count++;
  }
  
  int32_t lng = flat * 10000;
  int32_t lat = flon * 10000;

  datasend[0] = lat;
  datasend[1] = lat >> 8;
  datasend[2] = lat >> 16;

  datasend[3] = lng;
  datasend[4] = lng >> 8;
  datasend[5] = lng >> 16;
  smartdelay(1000);
  delay(5000);
}

static void smartdelay(unsigned long ms)
{
  unsigned long start = millis();
  do 
  {
    while (ss.available())
    {
      gps.encode(ss.read());
    }
  } while (millis() - start < ms);
}


void loop() {
    os_runloop_once();
     
   
    
}
