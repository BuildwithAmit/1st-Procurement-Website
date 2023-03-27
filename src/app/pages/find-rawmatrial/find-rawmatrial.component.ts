import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare let $: any
declare let AOS: any;

@Component({
  selector: 'app-find-rawmatrial',
  templateUrl: './find-rawmatrial.component.html',
  styleUrls: ['./find-rawmatrial.component.css']
})
export class FindRawmatrialComponent {

  constructor() { window.scrollTo(0, 0) }
  ngOnInit(): void {
    $(document).ready(() => {
      AOS.init();
    })
  window.scrollTo(0,0);

  }
  scrollToSection() {
    $('html,body').animate({
      scrollTop: $("#form").offset().top
    },
      'slow');
  }

  faqData = [
    {
      id: 1,
      question: "What types of raw materials do you offer?",
      answer: "We offer a wide variety of raw materials, including metals, plastics, polymers, composites, ceramics, natural materials, textiles, chemicals, and more. Please let us know your specific needs and we can recommend the best options for you."
    },
    {
      id: 2,
      question: "How do I place an order for raw materials?",
      answer: "You can place an order for raw materials directly on our website. Simply select the materials you need, specify the quantity, and complete the checkout process."
    },
    {
      id: 3,
      question: "What is the lead time for delivery of raw materials?",
      answer: "The lead time for delivery of raw materials depends on the type of material and the quantity ordered. We will provide you with an estimated delivery date when you place your order."
    },
    {
      id: 4,
      question: "How do you ensure the quality of your raw materials?",
      answer: "We work with reputable suppliers and conduct regular quality control checks to ensure that our raw materials meet industry standards and our customers' needs."
    },
    {
      id: 5,
      question: "What is your customer service process?",
      answer: "We pride ourselves on providing excellent customer service. Our team is available to answer any questions you may have, and we will work with you to find a solution to any issues that may arise. You can contact us by phone, email, or through our website."
    },
    {
      id: 6,
      question: "What is your return policy for raw materials?",
      answer: "We understand that sometimes materials may need to be returned, and we have a clear and fair return policy in place. Please contact us if you need to return any materials, and we will work with you to find a solution."
    }
    ,
    {
      id: 7,
      question: "Do you offer discounts for bulk orders?",
      answer: "Yes, we offer discounts for bulk orders. Please contact us for a quote."
    },
    {
      id: 8,
      question: "Can you provide technical specifications for the raw materials you offer",
      answer: "Yes, we can provide technical specifications for the raw materials we offer. Please let us know your specific needs and we can provide you with the necessary information."
    }
  ]




  elements = [
    {
      name: 'Metals and Non metals',
      icon: '../../../assets/asserts/3dasserts/metals.png',
      content:  'Explore the distinct characteristics and diverse applications of metals and non-metals, two essential classes of elements with vastly different physical and chemical properties.',
    }, {
      name: 'Chemicals',
      icon: '../../../assets/asserts/3dasserts/chemicals.png',
      content: 'Discover the world of chemicals - substances with defined compositions and characteristic properties that are essential to the manufacturing, processing, and performance of countless products and applications.',
    }, {
      name: 'Polymers',
      icon: '../../../assets/asserts/3dasserts/polyemrs.png',
      content: 'materials composed of long chains of repeating units that exhibit unique mechanical, thermal, and chemical properties, and are used in a vast array of applications across industries.',
    }, {
      name: 'Composites',
      icon: '../../../assets/asserts/3dasserts/composites.png',
      content: 'Materials composed of 2+ distinct components that combine to create unique properties, and are used in a wide range of applications from construction and transportation to sports equipment and aerospace.',
    }, {
      name: 'Ceramics',
      icon: '../../../assets/asserts/3dasserts/ceramics.png',
      content: 'Discover ceramics - materials that are typically hard, brittle, and resistant to high temperatures and chemicals, and are used in a wide range of applications from pottery and construction to electronics and aerospace.',
    },
    {
      name: 'Natural Materials',
      icon: '../../../assets/asserts/3dasserts/ceramics.png',
      content: 'Discover the world of natural materials - substances that occur in nature and are used in a vast array of applications across industries, from traditional materials (wood, stone) to modern materials (silk, cellulose).',
    },
  ]
  

  clientLogo = [
    { logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' },
    { logoUrl: 'https://www.passionateinmarketing.com/wp-content/uploads/2021/10/Tata-Logo-Branding-in-Asia.jpg' },
    { logoUrl: 'https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png' },
    { logoUrl: 'https://w7.pngwing.com/pngs/604/324/png-transparent-larsen-toubro-architectural-engineering-lucknow-business-l-t-construction-hq-business-text-people-logo.png' },
    { logoUrl: 'https://images.crowdspring.com/blog/wp-content/uploads/2018/07/27131021/ibm-1.png' },
    { logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAABI1BMVEX///8mImIqaZwAAFQAAFYAAFIsea0qcKUsfLArdaorX5IrY5UqZJgrZpmSkasnL2sAZbYoi8AWEFsiHmAsXZEoOXEnM25codIAYrVimc3S0twrhbrb6vU2Mm5KR3kAAE8qVIcbFl2IhqKDrtYnmM4Aa7kQCFnQz9rk5Ox4pdIngcIpUITx8PXJ2+yavt49kstzcZPCws9SUH+sq7+bmrIAOncAkMsAAEXj7/ehoLaAfp0pQXdraY8Agbu4t8je3uYAcLoAWZMARX8AJWqz1epBotM+O3NgXocAAEKdsshbfqW/z94AVIxWhK2KoLy2wtN4ja1KcZ1ol70AM3OlwNZNXooJJmgAADuKutlBTn5zuN2Pss5SibR3nb+dy+VqgaQAWbIzlydCAAAMrUlEQVR4nO2bf0PavBbH2zXVOX2AtU6RBygto6AEkB8q8CAoMtgmdz5zzOvdc++29/8q7jlJW4oCuk0tunz+UMhJS/Jtcs5JApIkEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEgl8i9+796ur7d7mg2xEQpx+H68iw+z4WdFsC4HT5eHV19cWLFyBBqvueBt2eB4b+63htjQmw/m2YAgn2PgTdpAfln+O1P/7gAgxPpffdVCrVXf19BkF8Ze3ZM1eAdXj0Z6hAqnsWdMMeiH+Onz3zCTCEIsoHwd9BN+0hqD9fe+YXAOeAhIMgDwp8fvrTYHS8vDwpwPpHbsFBkO8+9ZzgfG35mgBdJwuAQZDP7z1pRxBfWV6+LsD6qmMGT5DPf3rC8RCG/8o0AYbv3BpnezAGvgXZxvvkfHllZaoA613P99GPe/nu5yBbeW/El1ZWZgmQWh3XO/vU7eafYDAYLS8tzRRgPe8b9jAIuntTVkePW5TzlaXZAqTy+YkcCAbBVVdY3j0hF9ajjZH150vPZwuQ+vbuw98vOr76MAj2fDlRtnlyEt7YCF+Q1uOUYLSy9HyOAO+nXNL+tHHydzmXy2UbrZOLjVcbQDgclknzEc6Ec+j+PAGmhj36+eLVp4uLi0/Qe4AJcKGZsk5qD93+X6T+5/Pn8wXoTr+wevLqL+DVK1eAixatDoim2dWH7cGvMTq8UYDhjNyPfv40IUCYoAdoVwh5RBJsHv55owC+POgKOAh8AoTDrJTWTEN5HBOhAN2/hQCpj7NuAIPAL8BF0inPtg4Ma/Hd4eXhy1sJ4FsMXKOqbfhGgD5wy2lDe7u72EEx/vLPl7cUYL3bmXmb3H8uxgKEzcHYkh38u7LA++nw+F/eWoBUas6dGpqXB4ACFZ+Fhox++Z778ZOwx397Aea4AYkNAm8EECU8MffLSa19z335Gb6wx/8jAszfEK3ZYe4DqpR2GpO2XJMsWlTs7b9++aMCpLqzHSGQ++sEBSDTrdVEY7ohEOpv9l//hACp7unc29YIjoBZHc22Qnffk5/jErrvF+DwkPfcYbYAqb3ZoQDp9HUYAjODP601FiEx6LHucwGg74cvzy9HvUKhcHo6+ud8aW156qaoI0BqZkboECJhuT/HHrwA8TdO//f3D19/+VqoX61QGP33mJ+LTBPgRgU6G6Y+mF8lUL7ss77vv7nsxWfXOv3f8fEMAfL5mz7CUmzrLpt8l3yFru+//jKv7y6n5/x0ePhiOBz6BEjlUzddGgurC+PuJujBg58y5mdB360drw3j+C2Zb8NhPuUKkF+/8VLr7SLFPIfel6+3ePCTnK252V/sw2q3m+cC3DwGpBhZQAV+Ct8xID371sWjwXy+m7r5wtbj2A34UWIf1vdAhNsci5QX0w/8OjAQ9oD5GRGruIgroDsi9iFlz10X/AbQs6egQP3WMfEalNIru1054Bfbc78U0x4FXhL/XrrdpTkr5FBzN7gSqnIwWclQVPvOGnsfbGUiUU4kssVK4s7/G8kamoOtJvljTurylZW/LeuJu2zvnbOVKdQ5vaNMGktuLUCMyLLOgP8KU6Bva+pkpcUXIOJlgjQTxUD+IwLoiT6QUHRZl7EoZFnNyUqPSQApHRlJPyaAxvOaHAyCGft7j0qAUaQojQWIj4dG3IsLhVFx5JajAM4SNwuDAQ9/stmsu9vdDoUw5/EJ0GmEamgtZ8tuyliu8aIA8QtQnBAgGnXLC9+3+YveEXOXO/wSnwASuAP0fgmF8CjQVoimEbU6FoBWVBuKtBg9IAc8algqVIJagW4U+AUoRfFJuwJkjtzyQoR5R2k7utODNGGUifbw7RQB3ChQM2RZNk3dqCZ0LgAlJrhKU9eNMpEJS5kTtmwSBcrtICeJT4BilD3omQIUo65z2IniRT4Bcgr3go4AMQPjwqCpE012RkAf+k/6zYqqQxETAErIIJvLDohsztswvGe2Mukip3QlD7gqAI3uuAU0gi99AlRM7g8dAeCfnsB53jAcAdowRBSc7R1T5wJUvastbZYHfQi2jrxE6IgN7JkCpCM976p0tMDDYLKJyPB4DewwFyAH3Va5n2s4PqCiywrvJFW5API4Zwo0UmxlevU4Z/s7e8SzBNiJjK+KYwlLhEwEHrjBlrlcAHjcppsOOJ1TZa+7+MA7Uk6VzRbFlUKO7ppcvkCYjALoBGYJkDnaHpPZ8mWC8K+fZTW5ADVNVtxlv8mcIPoId1s8xATAi02Fg+4hsONyvwDSEaaCswXY8bHNp0C/UqkkdNnc5TU9Acg1AdwqjgBZVI94HCyGAOlIwSdAxi2+PgUYXiYI41vl6QwXoGq7KaIrgGQ4ubLkCtCBMVHpZD0WYgpI2+jnXAGOvA4X2Spp2+cEGV4UAIeua6yIC9BR3fcQ/rkP6IMT5LME/SE6QSJfXTgGw+QUwDeuADueJXKEAsQjXhiUmGUcBqHf/JUTBnFSsClPE84yCTWy2YLRsnkUCHnDhBKrHNzp4MRiKINddAVIZ5wEeGeLCQBV027F75gzjwXAuGdgcuMIUDYwDwxVLYJpD/tyDEYKdbfa6DOXh3UJ1G3mJNq2de0gQAEyPScKFrYyLMGrRzIFCXxBPZrBbvaOjqQI3yPa4akipMTsvS8RgsepYzbnpsKWAi5OszXdAIfI5kDHgGBhwmpAtkwuQEeFcaIQlUB6nH3gXvsY7whFI84ipwRF3+MYFTMRWP2UcF3EvwOxBQuhrZ2oo0PWsBU33JuKbTRgqhPbYO8bhm3qEOay0oGm6ViS6ys2bh1R7gSxJKlqUElTEjfvpt8fvaJHwS0rbqdxY0AqbJdKaRQlvu3Mk3i6tLNVdBbHuVrDW8t2ao0GzOhqo+Gc/dDaINnC3C/W3HUiQqxm4eYhJEKK0+NYaFAZWAE+/kAAv2gE3YYAaLkLvgbkya1AmxIIA2KSUIfSWBPco7HYJwX3QgxcvkZUlZjuuul3g7t89Pn9IH1+kIDLTyZboQX+lvTvSZUd7lU7ltXB0z4r1mEnfpZELQzfZXjV5geA7HcOzIrhnRXxLCAWsthmTwNPCTGoU3azLL+ibVll92PgZnhDvC8rhaTA4jcILhVuEU1RjIpkKNCUhnoAebxGFOUt5PcEVvA1xZCaBtGg0gHOXbQSkpQk3bYVYmDzLQNKNHDsSQJFahKXBgb2WTUorIbAqFSkAd6DwG3xhlBVYaWwTCbwt60GtyEk7ZqJkGU1ID+DhLWitaQyMZt4wJVTcBevZhN4hiFTr1jsh39obWqkCulMMjQwYQVUVbUKLHpk3Bnthyq2NoBLSRZ3BRQq9U3SHChqp2pZpj6A29bw8LBlk90WsXdxK4GEpDZRAhRA60sUPj6mqDl4HmXoIslhQY4F7IbNFjdEczLcMrZV1nalBKyDqAISabjYyyqkzeSTmppBxwLEVBtiXo11T2U/GUMBcgbeLgQ1cS/FyAYrgKmr6lsYwGFShb5jF2WiHtTYLpYu1zRHgJArgNao2nZISpiDtqUpWcr7RUAPJkCHkKwngNSwVbdrdCxAm+Dv6KBmGQSAtWFVC1YA28bUrEFaIWIxATSboABmSIHl/FUBZJjw0N6EbhJNT0ozBEAfYKszBVA8AUwLPk8OeArwBhq6rnacQS5JbCI33H0rnwB6soLeIKEnYH5DUDdx7ydLvClgwsA2cJ+gZRKpY2Cv2dfh6cQUaLhTwK6WYRoEOgLQCWL3BqYeliTXCVL2GFvXR4DTVvQBJm51VBWtEiK66XOC0kAjzZaN346u4CsFg4JPALArzV1it9AxgP8lQQrAwqCK23ZtQ8FvsvIweJCDWNbGHQ62dFUVVwDDWcnoyi68UcGZNTEM2v4wKFETt7rZ0HLCII4wlQnAwyCWYk1Dhc+skADDIM9QmI+3xqkOZCY8m6EsU5EsJ+cBq5OzsNP/Wgh3hLJWczIRwts2m86Sp93kKQ/cA21OIuSW8htbj+DHpAKBQPAUqV9/Re/JSOcYg/rhHC2VSrwRhVLJOQhLl0r8EJRu+oyb3HhZKn3lr6YYi34jP0iI+43FWxgfmOLm5iY/7yvBK9bvArziB2GXULQ5aYyjkbpXTjPWJ434golSn2EsThofmsk+spYWNt3GpCeMrKUFr6WXP2hk6rAHjwKUZhkfGvjkEj8QK5acVkGzSukpRj5JoaHbnrF33ci7XfeMo5L7aDdL14y968YHp+79YDDunQwW4vOM7ivqM9LrxvhPGgUCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgeD/GTvwwuT9ZdYAAAAASUVORK5CYII=' },
    { logoUrl: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01104710/1267.png' },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplayTimeout: 2000,
    autoplaySpeed: 700,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }


  regexEmail: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regexName: any = /^[a-zA-Z ]*$/;
  regexPhoneNumber: any = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;

  formError:boolean = false;

  nameError:any
  emailError:any
  phoneError:any
  materialdescriptionError:any
  cityError:any
  addressError: any
  materialselectError:any
  selected: boolean = false;

  sendRawMaterialInfo(){
    let material_description = $('#matrial-desc').val();
  let name = $('#name').val();
  let email = $('#email').val();
  let phone = $('#phoneno').val();
  let city = $('#city').val();
    let address = $('#address').val();
   
    
      this.elements.forEach(element => {
        let material_select = document.getElementById("select-" + element.name) as HTMLInputElement;
        if (material_select.checked == true) { 
          this.selected = true 
        }
      });
    
    if (!this.selected) {
         this.materialselectError = 'Please select material';
          this.formError = true;
    }else if(material_description == null || material_description == undefined || material_description == ''){
    $('#material_description').addClass('error-b');
   this.materialdescriptionError = 'Material desciption is required';
   this.materialselectError = '';
    this.formError = true;
  }else if(name == null || name == undefined || name == ''){
    $('#material_description').removeClass('error-b');
    $('#name').addClass('error-b');
   this.formError = true;
   this.materialdescriptionError = '';
    this.nameError = 'Name is required';
  }else if(!this.regexName.test(name)){
    $('#name').addClass('error-b');
    this.nameError = 'please enter a valid name';
    this.formError = true;
  }else if(email == null || email == undefined || email == ''){
    $('#name').removeClass('error-b');
    this.nameError = '';
    $('#email').addClass('error-b');
    this.emailError = 'Email is required';
    this.formError = true;
  }else if(!this.regexEmail.test(email)){
    $('#email').addClass('error-b');
    this.emailError = 'please enter a valid email address';
    this.formError = true;
  }else if(phone == null || phone == undefined || phone == ''){
    $('#email').removeClass('error-b');
    this.emailError = '';

    $('#phoneno').addClass('error-b');
    this.phoneError = 'phone is required';
    this.formError = true;
  }else if(!this.regexPhoneNumber.test(phone)){
    $('#phoneno').addClass('error-b');
    this.phoneError = 'please enter a valid phone address';
    this.formError = true;
  }else if(city == null || city == undefined || city == ''){
    $('#phoneno').removeClass('error-b');
    this.phoneError = '';
    $('#city').addClass('error-b');
    this.cityError = 'city name is required';
    this.formError = true;
  }else if(address == null || address == undefined || address == ''){
    $('#companyname').removeClass('error-b');
    this.cityError = '';
    $('#address').addClass('error-b');
    this.addressError = 'Address is required';
    this.formError = true;
    } else {
      this.nameError = ''
      this.emailError = ""
      this.phoneError = ""
      this.materialselectError = ""
      this.materialdescriptionError = ""
      this.cityError = ""
      this.addressError = ""
      alert('done')
    }

}

}
