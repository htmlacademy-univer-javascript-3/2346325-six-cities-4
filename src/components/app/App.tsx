import MainScreen from '../../pages/main-screen/MainScreen';

type AppScreenProps = {
  offerCardNumber: number;
};

export default function App({ offerCardNumber }: AppScreenProps): JSX.Element {
  return <MainScreen offerCardNumber={offerCardNumber} />;
}
