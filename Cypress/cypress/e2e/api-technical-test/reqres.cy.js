
import { assert, expect } from "chai"

describe('Reqres Test Suites', function (){
  context('Production', function () {
    let responses = {}

    it('(+) Get List User', function (){
      let page = 2
      let method = "GET"
      let url = "https://reqres.in/api/users?page=" + page
      cy.request({
        method: method,
        url: url
      }).then((response) =>{
        responses.get_list_user = response.body
        expect(response.status).to.be.ok
        expect(response.status).to.be.ok
        expect(response.body.data[1].id).to.equal(8, "id")
        expect(response.body.data[1].email).to.equal("lindsay.ferguson@reqres.in", "email")
        expect(response.body.data[1].first_name).to.equal("Lindsay", "first_name")
        expect(response.body.data[1].last_name).to.equal("Ferguson", "last_name")
        expect(response.body.data[1].avatar).to.not.null
        expect(response.body.support.url).to.not.null
        expect(response.body.support.text).to.not.null
      })
    })

    it("(+) Get Single User", function (){
      console.log(responses.get_list_user)
      let id = responses.get_list_user.data[0].id
      let method = "GET"
      let url = "https://reqres.in/api/users/" + id
      cy.request({
        method: method,
        url: url
      }).then((response) =>{
        expect(response.status).to.be.ok
        expect(response.body.data.id).to.equal(responses.get_list_user.data[0].id, "id")
        expect(response.body.data.email).to.equal(responses.get_list_user.data[0].email, "email")
        expect(response.body.data.first_name).to.equal(responses.get_list_user.data[0].first_name, "first_name")
        expect(response.body.data.last_name).to.equal(responses.get_list_user.data[0].last_name, "last_name")
        expect(response.body.data.avatar).to.not.null
        expect(response.body.support.url).to.not.null
        expect(response.body.support.text).to.not.null
      })
    })

    it("(-) Get Single User - Not Found", function (){
      let id = 9999999999
      let method = "GET"
      let url = "https://reqres.in/api/users/" + id
      cy.request({
        method: method,
        url: url,
        failOnStatusCode: false
      }).then((response) =>{
        expect(response.status).to.equal(404)
      })
    })

    it('(+) Get List Resource', function (){
      let method = "GET"
      let url = "https://reqres.in/api/unknown/"
      cy.request({
        method: method,
        url: url
        }).then((response) =>{
          responses.get_list_resource = response.body
          expect(response.status).to.be.ok
        // expect(response.body.code).to.equal(200, "code")
        // expect(response.body.type).to.equal("unknown", "type")
        // expect(response.body.message).to.equal("99", "message")
      })
    })

    it('(+) Get Single Resource', function (){
      let id = responses.get_list_resource.data[0].id
      let method = "GET"
      let url = "https://reqres.in/api/unknown/" + id
      cy.request({
        method: method,
        url: url
        }).then((response) =>{
        expect(response.status).to.be.ok
        expect(response.body.data.id).to.equal(responses.get_list_resource.data[0].id, "id")
        expect(response.body.data.name).to.equal(responses.get_list_resource.data[0].name, "name")
        expect(response.body.data.year).to.equal(responses.get_list_resource.data[0].year, "year")
        expect(response.body.data.color).to.equal(responses.get_list_resource.data[0].color, "color")
        expect(response.body.data.pantone_value).to.equal(responses.get_list_resource.data[0].pantone_value, "pantone_value")
        expect(response.body.support.url).to.not.null
        expect(response.body.support.text).to.not.null
      })
    })

    it('(-) Get Single Resource - Not Found', function (){
      let id = 999999
      let method = "GET"
      let url = "https://reqres.in/api/unknown/" + id
      cy.request({
        method: method,
        url: url,
        failOnStatusCode: false
        }).then((response) =>{
        expect(response.status).to.equal(404)
      })
    })

    it('(+) POST Create User', function (){
      let method = "POST"
      let url = "https://reqres.in/api/users"
      let body = {
        name: "morpheus",
        job: "leader"
    }
      let header = {
        "Content-Type": "application/json"
      }
      cy.request({
        method: method,
        url: url,
        body: body,
        headers: header
        }).then((response) =>{
        expect(response.status).to.be.ok
        expect(response.body.name).to.equal(body.name, "name")
        expect(response.body.job).to.equal(body.job, "job")
        expect(response.body.id).to.not.null
        expect(response.body.createdAt).to.not.null
        console.log("Id : ", response.body.id)
        console.log("Job : ", response.body.job)
      })
    })

    it('(+) Put Update User', function (){
      let id = responses.get_list_user.data[0].id
      let method = "PUT"
      let url = "https://reqres.in/api/users/" + id
      let body = {
        name: "abcdef",
        job: "exmud"
    }
      let header = {
        "Content-Type": "application/json"
      }
      cy.request({
        method: method,
        url: url,
        body: body,
        headers: header
        }).then((response) =>{
        expect(response.status).to.be.ok
        expect(response.body.name).to.equal(body.name, "name")
        expect(response.body.job).to.equal(body.job, "job")
        expect(response.body.createdAt).to.not.null
      })
    })

    it('(+) Patch Update User', function (){
      let id = responses.get_list_user.data[0].id
      let method = "PATCH"
      let url = "https://reqres.in/api/users/" + id
      let body = {
        name: "xyz",
        job: "ceo"
    }
      let header = {
        "Content-Type": "application/json"
      }
      cy.request({
        method: method,
        url: url,
        body: body,
        headers: header
        }).then((response) =>{
        expect(response.status).to.be.ok
        expect(response.body.name).to.equal(body.name, "name")
        expect(response.body.job).to.equal(body.job, "job")
        expect(response.body.createdAt).to.not.null
      })
    })

    it('(+) Delete User', function (){
      let id = responses.get_list_user.data[0].id
      let method = "DELETE"
      let url = "https://reqres.in/api/users/" + id
      cy.request({
        method: method,
        url: url,
        failOnStatusCode: false
        }).then((response) =>{
        expect(response.status).to.equal(204)
      })
    })

    it('(+) Post Register User', function (){
      let method = "POST"
      let url = "https://reqres.in/api/register"
      let body = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }
      let header = {
        "Content-Type": "application/json"
      }
      cy.request({
        method: method,
        url: url,
        body: body,
        headers: header
        }).then((response) =>{
        expect(response.status).to.be.ok
        expect(response.body.id).to.not.null
        expect(response.body.token).to.not.null
      })
    })

    it('(-) Post Register User - Missing Email', function (){
      let method = "POST"
      let url = "https://reqres.in/api/register"
      let body = {
        "password": "pistol"
    }
      let header = {
        "Content-Type": "application/json"
      }
      cy.request({
        method: method,
        url: url,
        body: body,
        headers: header,
        failOnStatusCode: false
        }).then((response) =>{
        expect(response.status).to.equal(400)
        expect(response.body.error).to.equal("Missing email or username", "error")
      })
    })

    it('(-) Post Register User - Missing Password', function (){
      let method = "POST"
      let url = "https://reqres.in/api/register"
      let body = {
        "email": "sydney@fife"
    }
      let header = {
        "Content-Type": "application/json"
      }
      cy.request({
        method: method,
        url: url,
        body: body,
        headers: header,
        failOnStatusCode: false
        }).then((response) =>{
        expect(response.status).to.equal(400)
        expect(response.body.error).to.equal("Missing password", "error")
      })
    })

    it('(+) Post Login User', function (){
      let method = "POST"
      let url = "https://reqres.in/api/login"
      let body = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
      let header = {
        "Content-Type": "application/json"
      }
      cy.request({
        method: method,
        url: url,
        body: body,
        headers: header
        }).then((response) =>{
        expect(response.status).to.be.ok
        expect(response.body.token).to.not.null
      })
    })

    it('(-) Post Login User - Missing Email', function (){
      let method = "POST"
      let url = "https://reqres.in/api/login"
      let body = {
        "password": "cityslicka"
    }
      let header = {
        "Content-Type": "application/json"
      }
      cy.request({
        method: method,
        url: url,
        body: body,
        headers: header,
        failOnStatusCode: false
        }).then((response) =>{
        expect(response.status).to.equal(400)
        expect(response.body.error).to.equal("Missing email or username", "error")
      })
    })

    it('(-) Post Login User - Missing Password', function (){
      let method = "POST"
      let url = "https://reqres.in/api/login"
      let body = {
        "email": "eve.holt@reqres.in"
    }
      let header = {
        "Content-Type": "application/json"
      }
      cy.request({
        method: method,
        url: url,
        body: body,
        headers: header,
        failOnStatusCode: false
        }).then((response) =>{
        expect(response.status).to.equal(400)
        expect(response.body.error).to.equal("Missing password", "error")
      })
    })
  })
})