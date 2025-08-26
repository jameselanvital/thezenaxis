import { useForm, ValidationError } from '@formspree/react';

function FormspreeTestComponent() {
  const [state, handleSubmit] = useForm("mnnbqzoe");
  
  if (state.succeeded) {
      return (
        <div style={{ padding: '20px', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '5px', margin: '20px' }}>
          <p>✅ Thanks for testing! Your message was sent successfully.</p>
        </div>
      );
  }
  
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '20px' }}>
      <h2>Formspree Test Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email Address:
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        
        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={state.submitting}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: state.submitting ? '#ccc' : '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: state.submitting ? 'not-allowed' : 'pointer'
          }}
        >
          {state.submitting ? 'Sending...' : 'Submit Test'}
        </button>
      </form>
    </div>
  );
}

export default FormspreeTestComponent;
