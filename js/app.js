$('#exampleModalLong').on('shown.bs.modal', function (e) {
    //console.log($(e.relatedTarget));
    console.log("relatedTarget is: " + e.relatedTarget.attributes);
    var modal = $('#exampleModalLong');
    var source = e.relatedTarget.id;     
    switch(source){
        case "myTechSkills":{
            modal.find('.modal-body').html('<p>I have MS from BITS Pilani and i started programming from class 7 and still continuing. Being a hands on developer i also have business acumen, '+
            'able to use rith tools and technologies to deliver on time. I also have a research paper published and a patent application and have submited several '+
            'disclosures. </p>'+
            
            '</p>My expertiese is but not limited to, Java, Spring Boot, Spring cloud, Kafka, Terrafarm, Packer, nodejs, Couchbase, C#, Python, AWS, Jenkins, Git, Progressive Web app, SQL, '+
            'Bootstrap, Angular JS, Cucumber, JUnit.</p>');

            modal.find('.modal-title').text('My Education and Skills');
            break;
        }
        case "tescoExp":{
            modal.find('.modal-body').html('<p>As an Architect I Design, develop enterprise services for reward program for Tesco customers. These services will listen for events published from online and Point of sale systems and should respond in less than hundred milliseconds. </p>'+
            '<p>Integrating customers who spend on partner outletes to be able to get the reward points accumulates as TESCO clubcard points which can be redemed from TESCO stores.</p>' +
            '<p>Automate AWS infrastrucute of image creation and jenkins automation, arriving at splunk dashboards.</p>' +
            '<p>I suggest right engineering practices, help choose right tools and technologies for the requirement take ownership and deliver.</p>' +
            '<p>Being part of interview panel for external hires participate in interview drives and internal promotions. Mentor people guide and motivate them in their delivers.</p>'

        );

            modal.find('.modal-title').text('What am i doing in TESCO?');
            break;
        }
        case "hpExp":{
            modal.find('.modal-body').html(
            
            '<p>I have developed enterprise server printing solition certified by Apple first of such in world which enables users to print from ' +
             'their ios devices to enterprise printer. Implemneted page scaling job accounting, print job cancellation, file purging and  security imnprovements.</p>'+
            
            '<p> for Managed Print Services business, I have integrated part shipment details from shipment companies such as Fedex to HP systems using open source middlewares.</p>' +
            '<p>Being part of hiring panel i contributed towards external hiring.</p>'+
            'Focussed on innovation i have seven disclosures out of which one got published as research paper and one is filed as a patent application.</p>');

            modal.find('.modal-title').text('Experience in HP PPS R&D');
            break;
        }
        
        case "dellExp":{
            modal.find('.modal-body').html('<p>I am responsible for developing REST interfaces that will be comnsumed by B2B customers to order their hardware. This is when i started proposing where every one was inclined to SOAP, i made pitch for REST based services and proposal was accepted. This services has the potential to replace the old integration suite by putting a API management software for routing.</p>'+
            
            '<p>Other mentions</p>' +
            '<p>I have developed premium calculation engine for UIIC one the largest on life insurance comapnies in India. I was invlolved in reducing the premium calculation logic from minutes to under second </p> </p>');

            modal.find('.modal-title').text('Experience in DELL and notable others');
            break;
        }

    }
    

    console.log();
    $('#myInput').trigger('focus')
  })