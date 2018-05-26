import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.16906,
          longitude: 115.108749
        },
        title: 'Air Terjun Aling-Aling',
        subtitle: 'Jalan Raya Desa Sambangan, Sambangan, Sukasada, Sambangan, Sukasada, Kabupaten Buleleng, Bali'
      },
      {
        key:2,
        latlng: {
          latitude:-8.151049,
          longitude:  115.131752
        },
        title: 'Air Terjun Wana Ayu',
        subtitle: 'Pegadungan adalah desa di kecamatan Sukasada, Buleleng, Bali'
      },
      {
        key:3,
        latlng: {
          latitude:-8.213747,
          longitude: 115.118877
        },
        title: 'Air Terjun Banyumala',
        subtitle: 'Wanagiri, Sukasada, Wanagiri, Sukasada, Kabupaten Buleleng, Bali'
      }
      ,
      {
        key:4,
        latlng: {
          latitude: -8.174328,
          longitude: 115.191147
        },
        title: 'Air Terjun Sekumpul',
        subtitle: 'Sekumpul, Sawan, Lemukih, Sawan, Kabupaten Buleleng, Bali, Bali'
      },
       {
        key:5,
        latlng: {
          latitude:-8.184863,
          longitude:  115.145828
        },
        title: 'Air Terjun Gitgit',
        subtitle: 'Jalan Raya Bedugul - Singaraja, Gitgit, Sukasada, Kabupaten Buleleng, Bali'
      },
      {
        key:6,
        latlng: {
          latitude:-8.199305,
          longitude: 115.150291
        },
        title: 'Air Terjun Gitgit Twin',
        subtitle: ' Jl. Raya Bedugul - Singaraja, Gitgit, Sukasada, Kabupaten Buleleng, Bali '
      },
      {
        key:7,
        latlng: {
          latitude:-8.183674,
          longitude:  115.123341
        },
        title: 'Air Terjun Jembong',
        subtitle: 'Ambengan, Sukasada, Kabupaten Buleleng, Bali '
      }, 
      {
        key:8,
        latlng: {
          latitude:-8.136945,
          longitude: 115.104801
        },
        title: 'Air Terjun Tembok Barak',
        subtitle: 'Gang Cengkeh, Sambangan, Sukasada, Sambangan, Kec. Buleleng, Kabupaten Buleleng, Bali'
      }, 
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Air Terjun di Buleleng
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Tesya Putri </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#7986cb',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#7986cb',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }

});