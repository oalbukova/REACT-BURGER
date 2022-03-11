describe("app works correctly with routes", function () {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should scroll after continue sauce-tab-button", function () {
    cy.get("[class^=tab_tab]").contains("Соусы").click();
    cy.contains("Соус с шипами Антарианского плоскоходца");
  });

  it("should scroll after continue toppings-tab-button", function () {
    cy.get("[class^=tab_tab]").contains("Начинки").click();
    cy.contains("Биокотлета из марсианской Магнолии");
  });

  it("should drag and drop", function () {
    cy.contains("Соус фирменный Space Sauce").trigger("dragstart");
    cy.get("[class^=burger-constructor_burgerConstructor]").trigger("drop");
    cy.get("[class^=burger-constructor_burgerConstructor]").contains(
      "Соус фирменный Space Sauce"
    );
  });

  it("should delete burger-ingredient after continue delete-button", function () {
    cy.get("[class^=constructor-element__action]").click();
    cy.get("[class^=burger-constructor_burgerConstructor]")
      .contains("Соус фирменный Space Sauce")
      .should("not.exist");
  });

  it("should if the bun is not added, the order confirmation button is inactive", function () {
    cy.contains("Соус фирменный Space Sauce").trigger("dragstart");
    cy.get("[class^=burger-constructor_burgerConstructor]").trigger("drop");
    cy.get("[class^=burger-constructor_burgerConstructor]").contains(
      "Соус фирменный Space Sauce"
    );
    cy.get("[class^=button_button]").should("be.disabled");
  });

  it("should change the count of the selected ingredient", function () {
    cy.contains("Сыр с астероидной плесенью").trigger("dragstart");
    cy.get("[class^=burger-constructor_burgerConstructor]").trigger("drop");
    cy.contains("Сыр с астероидной плесенью").trigger("dragstart");
    cy.get("[class^=burger-constructor_burgerConstructor]").trigger("drop");
    cy.get("[class^=counter_counter__num]").last().contains("2");
  });

  it("should if the bun is added, the order confirmation button is active", function () {
    cy.contains("Краторная булка N-200i").trigger("dragstart");
    cy.get("[class^=burger-constructor_burgerConstructor]").trigger("drop");
    cy.get("[class^=burger-constructor_burgerConstructor]").contains(
      "Краторная булка N-200i"
    );
    cy.get("[class^=button_button]").should("not.be.disabled");
  });

  it("should submit order and open order-modal after continue order-button, close modal after continue close-button click", function () {
    cy.get("[class^=button_button]").contains("Оформить заказ").click();
    cy.contains("Вход");
    cy.get("[class^=input__icon]").first().click();
    cy.get("input[name=email]").type("bonus@bk.ru");
    cy.get("[class^=input__icon]").last().click();
    cy.get("input[name=password]").type(`1111111111{enter}`);
    cy.contains("Соберите бургер");
    cy.get("button").contains("Оформить заказ").click();
    cy.contains("Подождите, идет оформление заказа.");
    cy.wait(20000);
    cy.contains("идентификатор заказа").should("be.visible");
    cy.get("[class^=modal_close]").click();
    cy.contains("идентификатор заказа").should("not.exist");
  });

  it("should open profile page after continue profile-button click, if the user is authorized", function () {
    cy.get("a").contains("Olga").click();
    cy.contains("Профиль");
    cy.get("a").contains("Конструктор").click();
  });
});
