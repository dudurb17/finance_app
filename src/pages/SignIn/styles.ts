import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

export const SignInContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 20px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  background-color: #3b3bdf;
  border-radius: 8px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const LinkText = styled.Text`
  font-size: 17px;
  color: #121212;
`;
