class AddDeviseToModels < ActiveRecord::Migration
  def self.up
    change_table :models do |t|
      ## Database authenticatable
      t.change :email, :string,             null: false, default: ""
      t.change :encrypted_password, :string, null: false, default: ""

      ## Recoverable
      t.change   :reset_password_token, :string
      t.change :reset_password_sent_at, :datetime

      ## Rememberable
      t.change :remember_created_at, :datetime

      ## Trackable
      t.change  :sign_in_count, :integer, default: 0, null: false
      t.change :current_sign_in_at, :datetime
      t.change :last_sign_in_at, :datetime
      t.change   :current_sign_in_ip, :string
      t.change   :last_sign_in_ip, :string

      ## Confirmable
      # t.string   :confirmation_token
      # t.change :confirmed_at, :datetime
      # t.change :confirmation_sent_at, :datetime
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.change  :failed_attempts, :integer, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.change :locked_at, :datetime


      # Uncomment below if timestamps were not included in your original model.
      #t.timestamps null: false
    end

    #add_index :models, :email,                unique: true
    #add_index :models, :reset_password_token, unique: true
    # add_index :models, :confirmation_token,   unique: true
    # add_index :models, :unlock_token,         unique: true
  end

  def self.down
    # By default, we don't want to make any assumption about how to roll back a migration when your
    # model already existed. Please edit below which fields you would like to remove in this migration.
    raise ActiveRecord::IrreversibleMigration
  end
end
