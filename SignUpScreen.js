import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, SafeAreaView, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { authService } from './firebase'

export default function SignUp({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setID] = useState('');
  const [username, setUserName] = useState('');

  // 각 입력 필드에 대한 경고 메시지 상태 변수 추가
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [idError, setIDError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isValidUsername = (username) => {
    // 아이디는 최소 4자 이상, 영문 대/소문자와 숫자만 허용
    const usernameRegex = /^[a-zA-Z0-9]{4,}$/;

    // 아이디가 정규식과 일치하고, 최소 길이를 충족해야 유효
    return usernameRegex.test(username);
  };
  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Login")
      }
    })

    return unsubscribe
  }, [navigation]);

  const handleSignUp = () => {
    authService
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message))


    // 유효성 검사 로직 추가
    let isValid = true;

    // 이메일 유효성 검사
    if (!isValidEmail(email)) {
      setEmailError('올바른 이메일 주소를 입력하세요.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // 비밀번호 유효성 검사
    if (password.length < 6) {
      setPasswordError('비밀번호는 최소 6자 이상이어야 합니다.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // 아이디 유효성 검사
    if (!isValidUsername(username)) {
      setIDError('아이디는 최소 4자 이상이어야 하며, 영문 대/소문자와 숫자만 허용합니다.');
      isValid = false;
    } else {
      setIDError('');
    }

    // 닉네임 유효성 검사
    if (username.length < 3) {
      setUsernameError('닉네임은 최소 3자 이상이어야 합니다.');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (isValid) {
      // 유효성 검사를 통과한 경우 회원 가입 로직 실행
      // Firebase, 서버 API 호출 
    }
  };

  return (
    <LinearGradient colors={['#045FB4', '#81DAF5', '#ECF6CE']} style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.content}>
              <Text style={styles.title} onPress={() => navigation.navigate('Shop')}>
                TURFSKY
              </Text>
              <Text style={styles.Text}>가입을 환영합니다!</Text>

              <View style={styles.inputBox}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="이메일"
                    onChangeText={setEmail}
                    value={email}
                    placeholderTextColor="rgba(0, 0, 0, 0.44)"
                  />
                </View>
                {/* 이메일 입력 에러 메시지 표시 */}
                <Text style={styles.errorText}>{emailError}</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="아이디"
                    onChangeText={setID}
                    value={id}
                    placeholderTextColor="rgba(0, 0, 0, 0.44)"
                  />
                </View>
                {/* 아이디 입력 에러 메시지 표시 */}
                <Text style={styles.errorText}>{idError}</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="비밀번호"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                    placeholderTextColor="rgba(0, 0, 0, 0.44)"
                  />
                </View>
                {/* 비밀번호 입력 에러 메시지 표시 */}
                <Text style={styles.errorText}>{passwordError}</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="닉네임"
                    onChangeText={setUserName}
                    value={username}
                    placeholderTextColor="rgba(0, 0, 0, 0.44)"
                  />
                </View>
                {/* 닉네임 입력 에러 메시지 표시 */}
                <Text style={styles.errorText}>{usernameError}</Text>
              </View>

              <TouchableOpacity onPress={handleSignUp} style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttontext}>가입하기</Text>


              </TouchableOpacity>
              <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                이미 계정이 있으신가요? 로그인하기
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 44,
    color: 'white',
    textShadowColor: '#F2F2F2',
    fontWeight: 'bold',
    textShadowRadius: 10,
    textShadowOffset: { width: -2, height: -2 },
  },
  Text: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    marginBottom: 30,
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 15,
    paddingTop: 35,
    paddingBottom: 20,
    borderRadius: 20,
    marginBottom: 10,
    alignContent: 'center',
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    shadowColor: 'rgba(131, 209, 255, 0.32)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100,
    shadowRadius: 5,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 4,
  },
  buttontext: {
    color: 'rgba(0, 0, 0, 0.44)',
    fontSize: 18,
  },
  link: {
    color: 'rgba(0, 0, 0, 0.44)',
    fontSize: 13,
  },
  errorText: {
    color: '#FA5858',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
  },
});