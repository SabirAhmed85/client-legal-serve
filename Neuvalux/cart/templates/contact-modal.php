<!-- Modal -->
<div class="modal fade contact-form" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="newsletterSignModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form id="contact-form" role="form" onsubmit="submitContact(event, this)">
        <div class="messages">
          Book an Appointment with us to discuss this product and any of your other needs.
        </div>

        <div class="controls">

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_name">First Name *</label>
                        <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your first name *" required="required" data-error="Firstname is required.">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_lastname">Last Name *</label>
                        <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your last name *" required="required" data-error="Lastname is required.">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_email">Email *</label>
                        <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required.">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_booking_date">Booking Date</label>
                    <div class="input-group" data-provide="datepicker">
                      <input type="text" readonly placeholder="Enter a preferred date" class="form-control datepicker">
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="fa fa-clock-o"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="form_message">Message</label>
                        <textarea id="form_message" name="message" class="form-control" placeholder="Leave any additional comments or notes..." rows="4"></textarea>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-12">
                    <input type="submit" class="btn btn-success btn-send" value="Send message">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="text-muted">
                        <strong>*</strong> These fields are required.
                </div>
            </div>
          </div>

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>