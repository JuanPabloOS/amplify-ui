import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {
  AmplifyAuthenticatorModule,
  AmplifyTextModule,
  AmplifyPasswordFieldModule,
  AmplifyTextFieldModule,
  AmplifyTabsModule,
  AmplifyPhoneNumberModule,
  AmplifyHeadingModule,
} from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomSignUpFieldsComponent } from 'src/pages/ui/components/authenticator/custom-sign-up-fields/custom-sign-up-fields.component';
import { CustomSlotsComponent } from 'src/pages/ui/components/authenticator/custom-slots/custom-slots.component';
import { HubEventsComponent } from 'src/pages/ui/components/authenticator/hub-events/hub-events.component';
import { I18nComponent } from 'src/pages/ui/components/authenticator/i18n/i18n.component';
import { ModalComponent } from 'src/pages/ui/components/authenticator/modal/modal.component';
import { ResetPasswordComponent } from 'src/pages/ui/components/authenticator/reset-password/reset-password.component';
import { SignInFederatedComponent } from 'src/pages/ui/components/authenticator/sign-in-federated/sign-in-federated.component';
import { SignInSMSMFAComponent } from 'src/pages/ui/components/authenticator/sign-in-sms-mfa/sign-in-sms-mfa.component';
import { SignInTOTPMFAComponent } from 'src/pages/ui/components/authenticator/sign-in-totp-mfa/sign-in-totp-mfa.component';
import { SignInTOTPSMSComponent } from 'src/pages/ui/components/authenticator/sign-in-totp-sms/sign-in-totp-sms.component';
import { SignInWithEmailComponent } from 'src/pages/ui/components/authenticator/sign-in-with-email/sign-in-with-email.component';
import { SignInWithPhoneComponent } from 'src/pages/ui/components/authenticator/sign-in-with-phone/sign-in-with-phone.component';
import { SignInWithUsernameComponent } from 'src/pages/ui/components/authenticator/sign-in-with-username/sign-in-with-username.component';
import { SignUpWithAttributesComponent } from 'src/pages/ui/components/authenticator/sign-up-with-attributes/sign-up-with-attributes.component';
import { SignUpWithEmailComponent } from 'src/pages/ui/components/authenticator/sign-up-with-email/sign-up-with-email.component';
import { SignUpWithEmailLambdaComponent } from 'src/pages/ui/components/authenticator/sign-up-with-email-lambda/sign-up-with-email-lambda.component';
import { SignUpWithPhoneComponent } from 'src/pages/ui/components/authenticator/sign-up-with-phone/sign-up-with-phone.component';
import { SignUpWithUsernameComponent } from 'src/pages/ui/components/authenticator/sign-up-with-username/sign-up-with-username.component';
import { UseAuthenticatorComponent } from 'src/pages/ui/components/authenticator/useAuthenticator/useAuthenticator.component';
import { UseAuthenticatorHomeComponent } from 'src/pages/ui/components/authenticator/useAuthenticator/home/useAuthenticatorHome.component';
import {
  AmplifyButtonModule,
  AmplifyViewModule,
  AmplifyFlexModule,
} from '@aws-amplify/ui-angular';
import { AmplifyButtonExampleComponent } from 'src/pages/ui/primitive-poc/button/button.component';
import { AmplifyViewExampleComponent } from 'src/pages/ui/primitive-poc/view/view.component';
import { AmplifyTextExampleComponent } from 'src/pages/ui/primitive-poc/text/text.component';
import { AmplifyTextFieldExampleComponent } from 'src/pages/ui/primitive-poc/text-field/text-field.component';
import { AmplifyPhoneNumberFieldExampleComponent } from 'src/pages/ui/primitive-poc/phone-number/phone-number.component';
import { AmplifyHeadingExampleComponent } from 'src/pages/ui/primitive-poc/heading/heading.component';
import { AmplifyPasswordFieldExampleComponent } from 'src/pages/ui/primitive-poc/password-field/password-field.component';
import { AmplifyFlexExampleComponent } from 'src/pages/ui/primitive-poc/flex/flex.component';
import { AmplifySignInComponent } from 'src/pages/demo/sign-in/sign-in.component';
import { AmplifyTabsExampleComponent } from 'src/pages/ui/primitive-poc/tabs/tabs.component';
import { AmplifyFieldComponent } from 'src/pages/demo/sign-in/fields/field.component';
import { AmplifyWrapperComponent } from 'src/pages/demo/sign-in/wrapper/wrapper.component';
import { AmplifyFieldWrapperComponent } from 'src/pages/demo/sign-in/wrapper/field-wrapper.component';
import { AmplifySignupComponent } from 'src/pages/demo/sign-up/sign-up.component';
import { AmplifyConfirmationComponent } from 'src/pages/demo/sign-up/confirmation/confirmation.component';
import { AmplifyHomeComponent } from 'src/pages/demo/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomSignUpFieldsComponent,
    CustomSlotsComponent,
    HubEventsComponent,
    I18nComponent,
    ModalComponent,
    ResetPasswordComponent,
    SignInFederatedComponent,
    SignInSMSMFAComponent,
    SignInTOTPMFAComponent,
    SignInTOTPSMSComponent,
    SignInWithEmailComponent,
    SignInWithPhoneComponent,
    SignInWithUsernameComponent,
    SignUpWithAttributesComponent,
    SignUpWithEmailComponent,
    SignUpWithEmailComponent,
    SignUpWithEmailLambdaComponent,
    SignUpWithPhoneComponent,
    SignUpWithUsernameComponent,
    UseAuthenticatorComponent,
    UseAuthenticatorHomeComponent,
    AmplifyButtonExampleComponent,
    AmplifyViewExampleComponent,
    AmplifyTextFieldExampleComponent,
    AmplifyPhoneNumberFieldExampleComponent,
    AmplifyHeadingExampleComponent,
    AmplifyPasswordFieldExampleComponent,
    AmplifyFlexExampleComponent,
    AmplifyTextExampleComponent,
    AmplifySignInComponent,
    AmplifyTabsExampleComponent,
    AmplifyFieldComponent,
    AmplifyWrapperComponent,
    AmplifyFieldWrapperComponent,
    AmplifySignupComponent,
    AmplifyConfirmationComponent,
    AmplifyHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    HttpClientModule,
    AmplifyButtonModule,
    AmplifyViewModule,
    AmplifyTextFieldModule,
    AmplifyPhoneNumberModule,
    AmplifyHeadingModule,
    AmplifyPasswordFieldModule,
    AmplifyFlexModule,
    AmplifyTextModule,
    AmplifyTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
