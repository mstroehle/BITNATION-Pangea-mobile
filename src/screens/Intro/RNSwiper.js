/*eslint-disable*/
import React from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import Swiper from 'react-native-swiper'
import Images from '../../global/AssetsImages';
import Colors from '../../global/colors';
import i18n from '../../global/i18n';

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
    backgroundColor:Colors.Transparent,
  },
  buildStyle: {
    positon:'absolute',
    width:'100%',
    height:'100%'
  },
  buildTextsContainer: {
    position:'absolute',
  },
  bitLogoContainer: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:'3%',
  },
  bitLogo: {
  },

  freeBoxContainer: {
    marginTop:'5%',
    justifyContent:'center',
    alignItems:'center',
  },
  freeSpeechContainer: {
    height: 150,
    width: 277,
    color: '#FFFFFF',
    fontFamily: "SF Pro Display",
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 36,
    justifyContent:'flex-end'
  },
  bitnationBoxContainer: {
    justifyContent:'center',
    alignItems:'center',
  },
  bitnation: {
    paddingLeft:'14%',
    paddingTop:'5%',
    paddingRight:'13%',
    color: '#FFFFFF',
    fontFamily: "SF Pro Text",
    fontSize: 22,
    lineHeight: 28,
  },

  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  slide4: {
    flex: 1,
  },

  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    zIndex:10
  },
  textBitnation: {
    color: 'white',
    fontSize: 22,
    zIndex:10
  },

}

export default () => <Swiper style={styles.wrapper} >
  <View style={styles.slide1}>
    <Image
      style ={styles.buildStyle}
      source ={Images.build}
    />
    <View style ={styles.buildTextsContainer}>
          <View style ={styles.bitLogoContainer}>
              <Image
                  source ={Images.bitLogo}
                  resizeMode ="cover"
              />
          </View>
          <View style ={styles.freeBoxContainer}>

              <View style ={styles.freeSpeechContainer}>
          
                <Text style={styles.text}>{i18n.t('screens.intro.freeSpeech.title')}</Text>

            </View>
          </View>
          <View style ={styles.bitnationBoxContainer}>

              <View style ={styles.bitnation}>
            
                 <Text style={styles.textBitnation}>{i18n.t('screens.intro.freeSpeech.text')}</Text>

            </View>
        </View>

    </View>
  
  </View>
  <View style={styles.slide2}>
      <Image
          style ={styles.buildStyle}
          source ={Images.monroe}
          />
      <View style ={styles.buildTextsContainer}>
          <View style ={styles.bitLogoContainer}>
              <Image
                
                source ={Images.bitLogo}
                resizeMode ="cover"
              />
          </View>
          <View style ={styles.freeBoxContainer}>

              <View style ={styles.freeSpeechContainer}>
            
                <Text style={styles.text}>{i18n.t('screens.intro.refugeeEmergencyResponse.title')}</Text>

              </View>
          </View>
          <View style ={styles.bitnationBoxContainer}>

            <View style ={styles.bitnation}>
            
                <Text style={styles.textBitnation}>{i18n.t('screens.intro.refugeeEmergencyResponse.text')}</Text>

            </View>
          </View>
        </View>
  </View>

  <View style={styles.slide3}>
      <Image
          style ={styles.buildStyle}
          source ={Images.fern}
          />
      <View style ={styles.buildTextsContainer}>
          <View style ={styles.bitLogoContainer}>
              <Image
                  
                source ={Images.bitLogo}
                resizeMode ="cover"
                  />
          </View>
          <View style ={styles.freeBoxContainer}>

              <View style ={styles.freeSpeechContainer}>
          
                 <Text style={styles.text}>{i18n.t('screens.intro.education.title')}</Text>

              </View>
          </View>
          <View style ={styles.bitnationBoxContainer}>

              <View style ={styles.bitnation}>
            
                <Text style={styles.textBitnation}>{i18n.t('screens.intro.education.text')}</Text>

            </View>
          </View>

        </View>
  </View>

  
  <View style={styles.slide4}>
      <Image
          style ={styles.buildStyle}
          source ={Images.moon}
      />
      <View style ={styles.buildTextsContainer}>
           <View style ={styles.bitLogoContainer}>
                <Image
                
                  source ={Images.bitLogo}
                  resizeMode ="cover"
                />
            </View>
            <View style ={styles.freeBoxContainer}>

                <View style ={styles.freeSpeechContainer}>
          
                  <Text style={styles.text}>{i18n.t('screens.intro.nations.title')}</Text>

                </View>
            </View>
            <View style ={styles.bitnationBoxContainer}>

                <View style ={styles.bitnation}>
            
                  <Text style={styles.textBitnation}>{i18n.t('screens.intro.nations.text')}</Text>

                </View>
            </View>

        </View>
  </View>
</Swiper>