import { 
  registerSchema, 
  loginSchema, 
  donationSchema, 
  testimonialSchema, 
  feedbackSchema,
  validateEmail,
  validatePhone,
  validatePasswordStrength
} from '@/lib/validations';

describe('Validation Schemas', () => {
  describe('registerSchema', () => {
    it('should validate correct registration data', () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        phone: '+254700000000'
      };

      const result = registerSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid email', () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'invalid-email',
        password: 'password123'
      };

      const result = registerSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject short password', () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: '123'
      };

      const result = registerSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('loginSchema', () => {
    it('should validate correct login data', () => {
      const validData = {
        email: 'john.doe@example.com',
        password: 'password123'
      };

      const result = loginSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject empty password', () => {
      const invalidData = {
        email: 'john.doe@example.com',
        password: ''
      };

      const result = loginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('donationSchema', () => {
    it('should validate correct donation data', () => {
      const validData = {
        donorName: 'John Doe',
        donorEmail: 'john.doe@example.com',
        amount: 1000,
        currency: 'KES',
        isAnonymous: false,
        message: 'Supporting the campaign'
      };

      const result = donationSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject negative amount', () => {
      const invalidData = {
        donorName: 'John Doe',
        donorEmail: 'john.doe@example.com',
        amount: -100,
        currency: 'KES'
      };

      const result = donationSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('testimonialSchema', () => {
    it('should validate correct testimonial data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        location: 'Ruaka',
        content: 'Great campaign and community development',
        rating: 5
      };

      const result = testimonialSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject rating above 5', () => {
      const invalidData = {
        name: 'John Doe',
        location: 'Ruaka',
        content: 'Great campaign',
        rating: 6
      };

      const result = testimonialSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('feedbackSchema', () => {
    it('should validate correct feedback data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        subject: 'Road improvement request',
        message: 'Please improve the road conditions in our area',
        category: 'suggestion'
      };

      const result = feedbackSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject short message', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        subject: 'Test',
        message: 'Hi',
        category: 'general'
      };

      const result = feedbackSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
});

describe('Validation Helpers', () => {
  describe('validateEmail', () => {
    it('should validate correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
      expect(validateEmail('test+tag@example.org')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('validatePhone', () => {
    it('should validate correct phone numbers', () => {
      expect(validatePhone('+254700000000')).toBe(true);
      expect(validatePhone('254700000000')).toBe(true);
      expect(validatePhone('0700000000')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(validatePhone('123')).toBe(false);
      expect(validatePhone('abc')).toBe(false);
      expect(validatePhone('')).toBe(false);
    });
  });

  describe('validatePasswordStrength', () => {
    it('should validate strong passwords', () => {
      const result = validatePasswordStrength('Password123');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject weak passwords', () => {
      const result = validatePasswordStrength('123');
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should require uppercase letters', () => {
      const result = validatePasswordStrength('password123');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Password must contain at least one uppercase letter');
    });

    it('should require lowercase letters', () => {
      const result = validatePasswordStrength('PASSWORD123');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Password must contain at least one lowercase letter');
    });

    it('should require numbers', () => {
      const result = validatePasswordStrength('Password');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Password must contain at least one number');
    });
  });
});
