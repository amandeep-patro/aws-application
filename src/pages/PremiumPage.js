import{ Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const PremiumPage = () => {
    return(
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <h1>hello, welcome to my bed</h1>
                    <h3> u r auth to premium</h3>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>

    );
}
 export default PremiumPage;