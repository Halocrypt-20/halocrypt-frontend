import { redirect, A } from "@hydrophobefireman/ui-lib";
import { AnimatedInput } from "../shared/AnimatedInput";
import { ErrorPopup, SocialLinkContainer } from "../shared/UserForm";
import { handler } from "../../authHandler";
import AuthStateSensitiveComponent from "../_AuthStateSensitiveComponent";
import { appEvents } from "../../globalStore";
import * as validators from "../../validators";

const store = appEvents.getStore();

const errors = validators.errors;

export default class Register extends AuthStateSensitiveComponent {
  componentDidMount() {
    super.componentDidMount();
  }
  componentDidUpdate() {
    if (store.isLoggedIn) {
      return redirect("/profile");
    }
    const inp = document.getElementById(
      "input___" + this.state.currentInputIndex
    );
    inp && inp.focus();
  }
  state = {
    user: "",
    email: "",
    name: "",
    password: "",
    conf_pass: "",
    school: "",
    ig_user_id: "",
    currentInputIndex: 0,
  };
  fieldsOrder = [
    "name",
    "user",
    "email",
    "school",
    "ig_user_id",
    "password",
    "conf_pass",
  ];
  labelTexts = {
    school: "School (Optional)",
    ig_user_id: "Instagram (Optional)",
    conf_pass: "Confirm password",
    user: "Username",
  };

  resetError = () => this.setState({ hasError: false, error: null });
  _validate_password = validators.password;

  _validate_user = validators.userName;

  _validate_name = validators.name;

  _validate_conf_pass(pw) {
    if (pw !== this.state.password) return { error: errors.pwNomatch };
    return validators.IS_VALID;
  }
  _validate_email = validators.REQUIRED_VALUE;
  _validate_school = validators.OPTIONAL_VALUE;
  _validate_ig_user_id = validators.OPTIONAL_VALUE;

  onSubmit = async (e) => {
    if (this.state.loading) return;
    e.preventDefault();
    const currIndex = this.state.currentInputIndex;
    const currentProp = this.fieldsOrder[currIndex];
    const isValid = this["_validate_" + currentProp](this.state[currentProp]);
    if (isValid.valid) {
      if (currIndex !== this.fieldsOrder.length - 1) {
        return this.setState({
          currentInputIndex: currIndex + 1,
          hasError: false,
          error: null,
        });
      }
      const { user, email, name, password, school, ig_user_id } = this.state;
      this.setState({ loading: true });
      const acc = await handler.createAccount({
        user,
        email,
        name,
        password,
        school,
        ig_user_id,
      });
      if (acc.error) {
        return this.setState({
          hasError: true,
          error: acc.error,
          loading: false,
        });
      }
      if (acc.id) {
        return redirect("/login");
      }
    } else {
      this.setState({ hasError: true, error: isValid.error });
    }
  };
  _decrementState = () => {
    this.setState((ps) => ({ currentInputIndex: ps.currentInputIndex - 1 }));
  };
  onInput(item) {
    return (e) => {
      let value = e.target.value;
      if (e !== "password" && e !== "conf_pass") {
        value = (value || "").trim();
      }
      this.setState({ [item]: value || "" });
    };
  }
  render(_, state) {
    const isLastInput = state.currentInputIndex === this.fieldsOrder.length - 1;
    return (
      <div class="form-doc">
        <div class="form-title heading-text">Register</div>
        <div class="form-ext-text heading-text clr">Let's Get You Started</div>
        {state.hasError && (
          <RegistrationError close={this.resetError} reason={state.error} />
        )}
        <div class="form-stx">
          <form action="javascript:" onsubmit={this.onSubmit}>
            <InputFields instance={this} />
            <FormActionControls
              state={state}
              decrement={this._decrementState}
              isLastInput={isLastInput}
            />
            {state.loading && <div>Hang on, getting you signed up</div>}
          </form>
          <div class="inst">
            <A href="/login" class="heading-text clr ">
              Want to Login Instead?
            </A>
          </div>
          <SocialLinkContainer />
        </div>
      </div>
    );
  }
}

function FormActionControls(props) {
  const { state, decrement, isLastInput } = props;
  return (
    <div class="form-action-controls">
      {state.currentInputIndex !== 0 && (
        <span
          class="form-act back"
          onClick={decrement}
          aria-label="previous step"
        ></span>
      )}
      {isLastInput ? (
        <button
          aria-label="Register"
          style={{ marginLeft: "auto" }}
          class="heading-text submit-button"
        >
          Register
        </button>
      ) : (
        <button class="form-act fwd" aria-label="next step"></button>
      )}
    </div>
  );
}

const inputTypes = {
  email: "email",
  password: "password",
  conf_pass: "password",
};
function InputFields(props) {
  const that = props.instance;

  return that.fieldsOrder.map(
    (x, i) =>
      i === that.state.currentInputIndex && (
        <AnimatedInput
          id={"input___" + i}
          inputClass="form-anim"
          value={that.state[x]}
          type={inputTypes[x] || "text"}
          labelText={that.labelTexts[x] || x}
          onInput={that.onInput(x)}
        />
      )
  );
}

function RegistrationError(props) {
  return (
    <>
      <div class="mask"></div>
      <ErrorPopup
        errorHead="Can't register"
        close={props.close}
        reasons={[props.reason]}
      />
    </>
  );
}
